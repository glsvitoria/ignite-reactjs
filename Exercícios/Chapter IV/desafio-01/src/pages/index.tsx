/* eslint-disable @next/next/no-img-element */
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { Header } from '../components/Header'
import { SwiperContinents } from '../components/Swiper/SwiperContinents'
import { TraverTypes } from '../components/TravelTypes/TravelTypes'

export default function Home() {
	return (
		<>
         <Head>
            <title>WorldTrip | Home</title>
         </Head>

			<Header />

			<Flex as="main" flexDirection="column">
				<Image src="/banner.svg" alt="Banner" height="368px" />

				<TraverTypes />

            <Image src="/divider.svg" alt="Divider" width="90px" mx="auto" mt="5rem" />

				<Box as="section" width="100%" mt="52px" mb="52px">
					<Flex
						flexDirection="column"
						alignItems="center"
						justifyItems="center"
						fontSize={28}
						fontWeight="medium"
                  color="dark.text"
					>
						<Text fontSize={36} fontWeight="medium">Vamos nessa?</Text>
						<Text>Então escolha seu continente</Text>
					</Flex>
				</Box>

				<SwiperContinents />
			</Flex>
		</>
	)
}
