import React from 'react'
import ReactDOM from 'react-dom/client'
import { createServer, Model } from 'miragejs'
import { App } from './App'

createServer({
   models: {
      transaction: Model,
   },

   seeds(server) {
      server.db.loadData({
         transactions: [
            {
               id: 1,
               title: 'Freelance de Website',
               type: 'deposit',
               category: 'Dev',
               amount: 6000,
               createdAt: new Date('2022-08-20 10:00:00')
            },
            {
               id: 2,
               title: 'Comprar fundos imobiliários',
               type: 'withdraw',
               category: 'Investimento',
               amount: 1000,
               createdAt: new Date('2022-09-02 14:00:00')
            }
         ]
      })
   },

   routes() {
      this.namespace = 'api'

      this.get('/transactions', () => {
         return this.schema.all('transaction')
      })

      this.post('/transactions', (schema, request) => {
         const data = JSON.parse(request.requestBody)

         return schema.create('transaction', data)
      })
   }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
