import { Flex, Image, Text } from '@chakra-ui/react'
import { TravelTypesItem } from './TravelTypesItem'

export function TraverTypes() {
	return (
		<Flex as="section" width="100%">
			<Flex as="ul" gap="130" mx="auto">
				<TravelTypesItem
					src="/cocktail.svg"
					alt="Life night"
					label="vida noturna"
				/>
				<TravelTypesItem src="/surf.svg" alt="Surf" label="praia" />
				<TravelTypesItem
					src="/building.svg"
					alt="Buildings"
					label="moderno"
				/>
				<TravelTypesItem src="/museum.svg" alt="Museum" label="clássico" />
				<TravelTypesItem
					src="/earth.svg"
					alt="Earth and more..."
					label="e mais..."
				/>
			</Flex>
		</Flex>
	)
}
