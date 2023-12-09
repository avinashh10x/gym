import React from 'react'
import Navbar from '../Navbar/Navbar'


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bg1 from '../../assets/img/bg/bg_1.jpg.webp'
import bg2 from '../../assets/img/bg/bg_2.jpg.webp'
import bg3 from '../../assets/img/bg/bg_3.jpg.webp'
import bg4 from '../../assets/img/bg/bg_4.jpg.webp'
import { Box, Button, Heading, Image, Stack, Text } from '@chakra-ui/react';


import './Hero.css'
import { Link } from 'react-router-dom';
import { faL } from '@fortawesome/free-solid-svg-icons';


const Hero = ({ scrollToJoin }) => {


    return (
        <>
            <Navbar />
            <Stack
                position={'relative'}
            >
                <Carousel
                    className="custom-carousel"
                    interval={5000}
                    transitionTime={1500}
                    infiniteLoop={true}
                    stopOnHover={false}
                    autoPlay={true}
                    showIndicators={true}
                    showStatus={false}
                    showThumbs={false}
                    showArrows={false}
                    useKeyboardArrows={true}
                    swipeable={false}
                >
                    <BgImg url={bg1} heading={'"Fitness is a journey, not a destination"'} text={'Tailored fitness journeys for every body and every goal.'} />
                    <BgImg url={bg2} heading={' "Wake up, work out, kick ass"'} text={' Experience workouts that bring lasting results, both physically and mentally.'} />
                    <BgImg url={bg3} heading={'"Earn your body"'} text={"Discover your inner athlete, whether you're a beginner or seasoned pro."} />
                    <BgImg url={bg4} heading={'"Your health is your wealth"'} text={' Achieve balance, flexibility, and mindfulness with our wellness programs.'} />



                </Carousel >
                <Button
                    zIndex={5}
                    variant={'solid'}
                    colorScheme='red'
                    w={40}
                    top={['60%', '70%']}
                    left={['32%', '44.7%']}
                    position={'absolute'}
                    textTransform={'uppercase'}
                    onClick={scrollToJoin}
                >get started</Button>

            </Stack>
        </>
    )
}

export default Hero

export const BgImg = ({ url, heading, text }) => {
    return (
        <Box
            width={'100%'}
            height={'100vh'}
            position='relative'
        >
            <Image
                src={url}
                objectFit={'cover'}
                width='100%'
                height='100%'
                position='absolute'
                top='0px'
                style={{
                    filter: 'brightness(.4)'
                }}
                left='0' />
            <Heading
                position={'absolute'}
                className='heading'
                top={['30%', '50%']}
                left='50%'
                textTransform={'uppercase'}
                fontSize={'2rem'}
                transform="translate(-50%,-50%)" >{heading}
            </Heading>
            <Text
                position={'absolute'}
                top={'55%'}
                className='text'
                left='50%'
                transform="translate(-50%,-50%)"
            >{text}</Text>

        </Box>
    )
}