import React from 'react'
import './trainer.css'
import { HStack, Heading, Image, Stack, Text } from '@chakra-ui/react'
import t1 from '../../assets/img/trainer/trainer-1.png.webp'
import t2 from '../../assets/img/trainer/trainer-2.png.webp'
import t3 from '../../assets/img/trainer/trainer-3.png.webp'
import t4 from '../../assets/img/trainer/trainer-4.png.webp'
import bg from '../../assets/img/bg_5.jpg.webp'

const Trainer = () => {

    const Trainer = ({ url, left, name }) => {
        return (
            <>
                <Image zIndex={5} className='trainerImg' w={260} src={url} position="absolute" top={'-25%'} left={left} />
                {/* <Text className='tarinerName'  textTransform={'uppercase'} position={'absolute'} left={left}>{name}</Text> */}
            </>
        )
    }

    return (
        <div style={{overflowX:'hidden'}}>
            <Stack alignItems={'center'} padding={'4%'}>
                <Text color={'#a70000'}>TRAINER</Text>
                <Heading textAlign={'center'} padding={'0 20%'}>FITNESS <span>TRAINER</span></Heading>
            </Stack>

            <HStack className='tarinerDiv' mt={'100px'} h={300} bgImage={bg} objectFit={'cover'} objectPosition={'bottom'} position="relative">
                <Trainer url={t1} left={'5%'} name={'emily'} />
                <Trainer url={t2} left={'30%'} name={'emily'} />
                <Trainer url={t3} left={'55%'} name={'emily'} />
                <Trainer url={t4} left={'80%'} name={'emily'} />
            </HStack>


        </div>
    )
}

export default Trainer
