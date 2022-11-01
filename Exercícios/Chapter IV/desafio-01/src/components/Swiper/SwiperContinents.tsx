import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation } from 'swiper'
import { Flex, Image, Text } from '@chakra-ui/react'
import { SwiperItem } from './SwiperItem'

export function SwiperContinents() {
	return (
		<Flex
			height="450px"
			maxWidth="100vw"
			alignItems="center"
			justifyItems="center"
			mb="4rem"
			color="#F5F8FA"
		>
			<Swiper
				pagination={{
					type: 'fraction',
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				className="mySwiper"
			>
				<SwiperSlide>
					<SwiperItem
						src="/europe.jpg"
						alt="Europa"
						continent="Europa"
						phrase="O continente mais antigo"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<SwiperItem
						src="/south_america.jpg"
						alt="South America"
						continent="América do Sul"
						phrase="O novo mundo"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<SwiperItem
						src="/north_america.jpg"
						alt="North America"
						continent="América do Norte"
						phrase="O da Disney"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<SwiperItem
						src="/africa.jpg"
						alt="Africa"
						continent="Africa"
						phrase="Biomas bem distintos"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<SwiperItem
						src="/oceania.jpg"
						alt="Oceania"
						continent="Oceania"
						phrase="O continente entre ilhas"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<SwiperItem
						src="/asia.jpg"
						alt="Asia"
						continent="Asia"
						phrase="O maior e mais cultural"
					/>
				</SwiperSlide>
			</Swiper>
		</Flex>
	)
}
