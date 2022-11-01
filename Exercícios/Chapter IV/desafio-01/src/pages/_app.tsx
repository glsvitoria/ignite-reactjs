import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { theme } from '../styles/theme'
import '../styles/styles.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Head>
				<link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
			</Head>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default MyApp
