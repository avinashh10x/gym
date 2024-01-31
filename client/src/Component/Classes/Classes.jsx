import React from 'react'
import './classes.css'
import class1 from '../../assets/img/classes/classes-1.jpg.webp'
import class2 from '../../assets/img/classes/classes-2.jpg.webp'
import class3 from '../../assets/img/classes/classes-3.jpg.webp'
import { Box, HStack, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Classes = () => {

    return (
        <>
            <Stack alignItems={'center'} mt={['20vw','20px']} padding={'6%'}>
                <Text color={'#a70000'}>OUR CLASSES</Text>
                <Heading textAlign={'center'} padding={'0 20%'}><span>FLEX</span> WORKOUT CLASSES </Heading>


                <HStack m={'5px 0'} flexDirection={['column', 'row']}>
                    <ClassFrame url={class1} text={"BODY BUILDING"} />
                    <ClassFrame url={class2} text={"WEIGHT LIFTING"} />
                    <ClassFrame url={class3} text={"CARDIO"} />
                </HStack>
                <Link style={{ color: '#a70000', margin: '10px 0' }} onClick={() => window.scrollTo(0, 0)} to='/classes'>VIEW  CLASSES →</Link>
            </Stack >
        </>
    )
}

export default Classes


export const ClassFrame = ({ url, text }) => {
    return (
        <Box className='box' p={'30px 0 0px'}>
            <Image className='boximg' borderRadius={5} w={'450px'} h={250} src={url} />
            <Text className='ctext' top={['82.5%', '82.2%']} fontSize={['1rem', '1.5rem']} padding={'9px 25px'} textTransform={'uppercase'}>{text}</Text>
        </Box>
    )
}