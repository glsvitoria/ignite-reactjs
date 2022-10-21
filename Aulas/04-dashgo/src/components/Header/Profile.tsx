import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
	showProfileData: boolean
}

export function Profile({ showProfileData }: ProfileProps) {
	return (
		<Flex align="center">
			{showProfileData && (
				<Box mr="4" textAlign="right">
					<Text>Guilherme Vitória</Text>
					<Text color="gray.300" fontSize="small">
						guivitoria2010@hotmail.com
					</Text>
				</Box>
			)}

			<Avatar
				size="md"
				name="Guilherme Vitória"
				src="https://github.com/glsvitoria.png"
			/>
		</Flex>
	)
}
