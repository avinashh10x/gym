import React from 'react'
import './join.css'
import { HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import img1 from '../../assets/img/001-fitness.svg'
import img2 from '../../assets/img/002-treadmill.svg'
import img3 from '../../assets/img/003-vip-card.svg'

const Join = React.forwardRef((props, ref) => {


  return (
    <div ref={ref}>
      <Stack alignItems={'center'} marginTop={'60px'} padding={'5%'}>
        <Text color={'#a70000'}>JOIN US NOW</Text>
        <Heading textAlign={'center'} padding={'0 20%'}>JOIN OUR FREE WORKOUT TRAINING WITH <span>FLEX</span></Heading>
        <HStack gap={10} p={25} flexDirection={['column', 'row']}>

          <Banner url={img1} heading={'REVITALIZE FITNESS JOURNEY FREE'} text={"Embark on a fitness journey with our free training sessions. Let the rhythmic flow of a small river named Duden guide you to a paradisematic country, where roasted parts of sentences fly into your mouth."} />
          <Banner url={img2} heading={'TONS OF CARDIO & STRENGTH'} text={"Experience an abundance of cardio and strength training. Just like the small river named Duden, our fitness routines flow smoothly, supplying the necessary regelialia for your journey to a healthier you."} />
          <Banner url={img3} heading={'NO COMMENTMENT MEMBERSHIPS'} text={"Enjoy our memberships with no commitments. The small river named Duden symbolizes the ease of our paradisematic fitness haven, where sentences, like roasted parts, seamlessly fly into your mouth."}
          />


        </HStack>
      </Stack>
    </div>
  )
})

export default Join

export const Banner = ({ url, heading, text }) => {
  return (
    <VStack p={'40px 10px 0'} textAlign={'center'} className='joinbanner' >
      <Image w={140} src={url} />
      <Heading fontSize={'1.6rem'} textAlign={'center'}>{heading}</Heading>
      <Text color={'gray'} textAlign={'center'}>{text}</Text>
    </VStack >
  )
}
