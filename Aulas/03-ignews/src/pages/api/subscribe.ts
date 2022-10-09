/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next'
import {query as q} from 'faunadb'
import { getSession } from 'next-auth/react'
import { fauna } from '../../services/fauna'
import { stripe } from '../../services/stripe'

type UserF = {
   ref: {
      id: string
   }
   data: {
      stripe_customer_id: string
   }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		const { user } = await getSession({ req }) // Pegar o usuário pelos cookies, porque os cookies podem ser acessados tanto pelo front qnt pelo back

      const userF = await fauna.query<UserF>(
         q.Get(
            q.Match(
               q.Index('user_by_email'),
               q.Casefold(user.email)
            )
         )
      )

      let customerId = userF.data.stripe_customer_id

      if(!customerId) {
         const stripeCustomer = await stripe.customers.create({
            email: user.email,
            // metadata
         })
   
         await fauna.query(
            q.Update(
               q.Ref(q.Collection('users'), userF.ref.id),
               {
                  data: {
                     stripe_customer_id: stripeCustomer.id
                  }
               }
            )
         )

         customerId = stripeCustomer.id
      }

		const stripeCheckoutSession = await stripe.checkout.sessions.create({
			customer: customerId,
			payment_method_types: ['card'],
			billing_address_collection: 'required',
			line_items: [{ price: 'price_1LplVvBysjCsc4pwsUFsSK7b', quantity: 1 }],
			mode: 'subscription',
			allow_promotion_codes: true,
			success_url: process.env.STRIPE_SUCESS_URL,
			cancel_url: process.env.STRIPE_CANCEL_URL,
		})

		return res.status(200).json({ sessionId: stripeCheckoutSession.id })
	} else {
		res.setHeader('Allow', 'POST')
		res.status(405).end('Method not allowed')
	}
}
