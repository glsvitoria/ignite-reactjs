import { Flex, Image, Text } from '@chakra-ui/react'

interface SwiperItemProps {
	src: string
	alt: string
	continent: string
	phrase: string
}

export function SwiperItem({ src, alt, continent, phrase }: SwiperItemProps) {
	return (
		<>
			<Image src={src} alt={alt} />
			<Flex position="absolute" direction="column" fontWeight="bold">
				<Text fontSize={48}>{continent}</Text>
				<Text fontSize={24}>{phrase}</Text>
			</Flex>
		</>
	)
}
