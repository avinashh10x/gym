import { Stack, VStack, Heading, Text, Image, HStack } from '@chakra-ui/react'
import React from 'react'
import model from '../../assets/img/about.png.webp'
import './About.css'


const About = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} >
            <Stack position={'relative'} mb={50} alignItems={'center'} direction={['column', 'row']} backgroundColor={'#121617'} padding={30} h={"100vh"}>
                <VStack width={['80%', '40%']} bgColor={'#e7e7e7'} margin={10} border='5px solid #a70000' borderRadius={'34% 49% 25% 42% / 43% 63% 26% 40% '}>
                    <Image src={model} loading='lazy' marginTop={'9px'} className='animation' width={['600px', '800px']} />

                </VStack>
                <VStack padding={15} width={'60%'} m={'10px'} alignItems={'flex-start'}>
                    <h4 style={{ color: '#a70000', textAlign: 'left' }}>INFOMATION ABOUT US</h4>
                    <Heading fontSize={['1.2rem', '2rem']} >FLEX A <span>CROSSFIT</span> WORKOUT TRAINING CENTER</Heading>
                    <Text mb={2} color={'gray'} >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. </Text>
                    <Text fontSize={['.5rem', '1rem']}>&rarr; &nbsp; &nbsp; MEN FITNESS AND WORKOUT</Text>
                    <Text fontSize={['.5rem', '1rem']}>&rarr; &nbsp; &nbsp; WOMEN FITNESS AND WORKOUT</Text>
                    <Text fontSize={['.5rem', '1rem']}>&rarr; &nbsp; &nbsp; PERSONAL TRAININGS</Text>
                </VStack>
                <Text position={'absolute'}
                    top={['38%', '87%']}
                    left={'11%'}
                    backgroundColor={'#a70000'}
                    height={'80px'}
                    width='80%'
                    margin={'auto'}
                    borderRadius={'2% 9% 44% 3% / 5% 2% 100% 6%  '}
                    textAlign={'center'}

                >
                    <HStack className='animation' justifyContent={'space-around'}>
                        <VStack >
                            <Heading fontSize={['1.5rem', '2.5rem']}>30+</Heading>
                            <Text fontSize={['.5rem', '1rem']}>YEARS OF EXPERIENCE</Text>
                        </VStack>
                        <VStack >
                            <Heading fontSize={['1.5rem', '2.5rem']}>100+</Heading>
                            <Text fontSize={['.5rem', '1rem']}>TRAINERS</Text>
                        </VStack>
                        <VStack >
                            <Heading fontSize={['1.5rem', '2.5rem']}>300+</Heading>
                            <Text fontSize={['.5rem', '1rem']}>EQUIPMENTS</Text>
                        </VStack>
                        <VStack>
                            <Heading> &nbsp;</Heading>
                            <Text> &nbsp;</Text>
                        </VStack>
                    </HStack>
                </Text>

            </Stack>

        </div>
    )
}
)
export default About

