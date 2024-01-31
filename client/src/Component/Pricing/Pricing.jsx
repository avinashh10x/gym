import React from 'react'
import './pricing.css'
import { Banner } from '../JoinUs/Join'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import img1 from '../../assets/img/001-fitness.svg'
import { Box, Button, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Pricing = () => {

    const PriceBox = ({ price, plane, l1, l2, l3, l4, l5 }) => {
        return (
            <Box className='priceBox' mt={10} w={350} textAlign={'center'} borderRadius={8} backgroundColor={'#121617'} p={50} gap={20}>
                <Text className='priceTitle' mb={5} textTransform={'uppercase'}>{plane}</Text>
                <Heading m={10}>{price}</Heading>
                <Text>{l1}</Text>
                <Text>{l2}</Text>
                <Text>{l3}</Text>
                <Text>{l4}</Text>
                <Text>{l5}</Text>
                <Button colorScheme='red' variant={'ghost'} mt={10}><Link className='linkodcontact' to='/contact'>GET STARTED</Link></Button>

            </Box>
        )
    }


    return (
        <>
            <Stack alignItems={'center'} padding={'4%'}>
                <Text color={'#a70000'}>OUR PRICING</Text>
                <Heading textAlign={'center'} padding={'0 20%'}>PRICING & <span>PACKAGES</span></Heading>

                <HStack gap={'2px 20px '} flexDirection={['column', 'row']}>
                    <PriceBox
                        plane={'Standard Plan'}
                        price={'$69'}
                        l1={'Personal Trainer'}
                        l2={'Flexible Schedule'}
                        l3={'Advanced Classes'}
                        l4={'Individual Attention'}
                        l5={'Nutrition Guidance'}
                    />

                    <PriceBox
                        plane={'Premium Plan'}
                        price={'$99'}
                        l1={'Dedicated Trainer'}
                        l2={'Customized Workouts'}
                        l3={'Special Events'}
                        l4={'Private Sessions'}
                        l5={'Free Massage Sessions'}
                    />


                    <PriceBox
                        plane={'Platinum Plan'}
                        price={'$149'}
                        l1={'Celebrity Trainers'}
                        l2={'Luxury Facilities'}
                        l3={'Red Carpet Events'}
                        l4={'Unlimited Sessions'}
                        l5={'Free Yoga Retreats'}
                    />

                </HStack>
                <HStack gap={10} p={25} flexDirection={['column', 'row']}>
                    <Banner url={""} heading={'THOUSANDS OF EQUIPMENTS'} text={"Explore a world of fitness possibilities with our vast array of cutting-edge equipment. Join us for free training sessions and let the serene flow of Duden lead you to a paradisematic experience, where each workout becomes a journey."} />
                    <Banner url={""} heading={'OPEN 24/7 FLEX GYM FITNESS'} text={"Experience the freedom of fitness at any hour with FLEX GYM. Our doors are open 24/7, providing you with unparalleled access to top-notch facilities. Join us for free training sessions and let the rhythmic flow of Duden guide you on your fitness journey."} />
                    <Banner url={""} heading={'BEST FOOD SUPPLEMENTS FOR YOU'} text={"Fuel your fitness journey with our premium selection of food supplements. Join us for free training sessions and let the rhythmic flow of Duden guide you to a paradisematic country, where nutrition meets excellence. Discover a new level of vitality with our carefully curated supplements."} />
                </HStack>
            </Stack>
        </>
    )
}

export default Pricing
