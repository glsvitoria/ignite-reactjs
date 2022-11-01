import { Flex, Image, Text } from '@chakra-ui/react'

interface TravelTypesItemProps {
	src: string
	alt: string
	label: string
}

export function TravelTypesItem({ src, alt, label }: TravelTypesItemProps) {
	return (
		<Flex as="li" flexDirection="column">
			<Image src={src} alt={alt} width="85" height="85" mb="2rem" />
			<Text
				textAlign="center"
				fontSize={24}
				fontWeight="semibold"
				color="dark.text"
			>
				{label}
			</Text>
		</Flex>
	)
}
