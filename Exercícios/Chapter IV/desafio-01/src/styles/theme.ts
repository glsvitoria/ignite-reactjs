import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
	colors: {
		highlight: {
			'100': '#FFBA08',
			'50': '#FFBA0880',
		},
		black: '#000000',
		dark: {
			text: '#47585B',
			info: {
				'100': '#999999',
				'50': '#99999980',
			},
		},
		white: '#FFFFFF',
		light: {
			text: '#F5F8FA',
			info: '#DADADA',
			heading: '#F5F8FA',
		},
	},
})
