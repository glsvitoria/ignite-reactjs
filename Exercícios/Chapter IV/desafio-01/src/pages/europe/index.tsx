import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { Header } from '../../components/Header'

export default function Europe() {
	return (
		<>
			<Header />
			<Image
				src="/europe.jpg"
				alt="Europe"
				height="500px"
				width="100vw"
				maxWidth="1080px"
				mx="auto"
			/>

			<Flex>
				<Text>
					A Europa é, por convenção, um dos seis continentes do mundo.
					Compreendendo a península ocidental da Eurásia, a Europa
					geralmente divide-se da Ásia a leste pela divisória de águas dos
					montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro
					a sudeste
				</Text>

				<Flex>
					<Box>
						<Text>50</Text>
						<Text>países</Text>
					</Box>
					<Box>
						<Text>60</Text>
						<Text>línguas</Text>
					</Box>
					<Box>
						<Text>27</Text>
						<Text>cidades + 100</Text>
					</Box>
				</Flex>
			</Flex>
		</>
	)
}
