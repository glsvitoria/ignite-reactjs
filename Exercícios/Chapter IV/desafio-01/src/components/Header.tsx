import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Flex, IconButton, Image } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import Router from 'next/router'

export function Header() {
	const [isHome, setIsHome] = useState(true)
	useEffect(() => {
      if(Router.asPath !== '/'){
         setIsHome(false)
      }
   }, [])

	return (
		<Flex as="header" alignItems="center" justifyContent="center" h="100px">
			{!isHome && (
				<IconButton
					icon={<ChevronLeftIcon w={8} h={8} />}
					bgColor="transparent"
					_hover={{ bgColor: 'transparent' }}
					aria-label="Back to home"
					position="absolute"
					left="140px"
				/>
			)}

			<Image src="/logo.svg" alt="Logo" width="184" height="46" />
		</Flex>
	)
}
