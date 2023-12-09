import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import pic1 from '../../assets/img/testimonial/testimonials-1.jpg'
import pic2 from '../../assets/img/testimonial/testimonials-2.jpg'
import pic3 from '../../assets/img/testimonial/testimonials-3.jpg'
import pic4 from '../../assets/img/testimonial/testimonials-4.jpg'
import { Box,  Heading, Stack, Text, VStack } from '@chakra-ui/react';
import './testimonial.css'

const Testimonial = () => {

    const Review = ({ data, name, status, url }) => {
        return (
            <Box h={500} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <VStack
                    border={'1px solid gray'}
                    w={350}
                    h={300}
                    borderRadius={8}
                    p={15}
                    backgroundColor={'#121617'}
                    justifyContent={'space-evenly'}
                    flexDirection={'column'}
                    className='reviewbox'
                >

                    <Text mb={5}

                        color={'gray'}
                        p={15}
                        textTransform={'uppercase'}>
                        {data}
                    </Text>
                    <Box display={'flex'} justifyContent={'space-around'} mb={10}>
                        <img src={url} id='testImg' alt="" />
                        <VStack  >
                            <Heading textAlign={'center'}>{name}</Heading>
                            <Text color={'#a70000'} textAlign={'center'}>{status}</Text>
                        </VStack>
                    </Box>
                </VStack>
            </Box>


        )
    }

    return (
        <div>
            <Stack alignItems={'center'} mt={5} padding={'6%'}>
                <Text color={'#a70000'}>TESTIMONIAL</Text>
                <Heading textAlign={'center'} padding={'0 20%'}>HAPPY PEOPLE</Heading>


                <div style={{width:'80vw'}}>
                    <Carousel
                        infiniteLoop={true}
                        stopOnHover={false}
                        autoPlay={true}
                        showStatus={false}
                        showIndicators={false}
                        showThumbs={false}
                        showArrows={true}  // Set this to true to show navigation arrows
                        useKeyboardArrows={true}
                        transitionTime={1500}  // Adjust this value for the transition speed
                        interval={4000}       // Adjust this value for the time between transitions
                    >

                        <Review
                            url={pic1}
                            name={'John Doe'}
                            data={'The fitness programs here are amazing! They are not only challenging but also fun. Ive seen incredible results since joining.'}
                            status={'Fitness Enthusiast'}
                        />

                        <Review
                            url={pic2}
                            name={'Alice Smith'}
                            data={'Joining this fitness community was the best decision of my life. Im healthier and more confident now.'}
                            status={'Wellness Advocate'}
                        />

                        <Review
                            url={pic3}
                            name={'Chris Johnson'}
                            data={'The atmosphere here is electric! I always look forward to my workouts. Proud to be a part of this community!'}
                            status={'Fitness Freak'}
                        />

                        <Review
                            url={pic4}
                            name={'Emily White'}
                            data={'Ive tried many fitness programs, but this one stands out.  the sense of community is unmatched. Its not just a gym; its a lifestyle!'}
                            status={'Health Enthusiast'}
                        />




                    </Carousel>
                </div>
            </Stack>

        </div>
    )
}

export default Testimonial
