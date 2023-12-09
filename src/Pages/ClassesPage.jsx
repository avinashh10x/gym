import React from 'react'
import Classes from '../Component/Classes/Classes'
import Hero from '../Component/Hero/Hero'
import { ClassFrame } from '../Component/Classes/Classes'
import { HStack, Heading, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Footer from '../Component/Footer/Footer'

import class1 from '../../src/assets/img/classes/classes-1.jpg.webp'
import class2 from '../../src/assets/img/classes/classes-2.jpg.webp'
import class3 from '../../src/assets/img/classes/classes-3.jpg.webp'
import class4 from '../../src/assets/img/classes/classes-4.jpg'
import class5 from '../../src/assets/img/classes/classes-5.jpg'
import class6 from '../../src/assets/img/classes/classes6.jpg'
import class7 from '../../src/assets/img/classes/classes7.webp'
import class8 from '../../src/assets/img/classes/classes8.jpg'
import class9 from '../../src/assets/img/classes/classes9.jpg'
import class10 from '../../src/assets/img/classes/classes10.jpg'
import class11 from '../../src/assets/img/classes/strong4.jpg'
import bg1 from '../assets/img/bg/bg_1.jpg.webp'

import Navbar from '../Component/Navbar/Navbar'
import {BgImg} from '../Component/Hero/Hero'

const ClassesPage = () => {
  return (
    <div>
      <Navbar/>
      {/* <Hero /> */}

   
        <BgImg url={class3} heading={'Train like a beast, look like a beauty'} text={'Tailored fitness journeys for every body and every goal.'} />




      <Stack alignItems={'center'} padding={'6%'}>
        <Text color={'#a70000'}>OUR CLASSES</Text>
        <Heading textAlign={'center'} padding={'0 20%'}><span>FLEX</span> WORKOUT CLASSES </Heading>

        <HStack m={'5px 0'} gap={5} flexDirection={['column', 'row']}>
          <ClassFrame url={class1} text={"BODY BUILDING"} />
          <ClassFrame url={class2} text={"WEIGHT LIFTING"} />
          <ClassFrame url={class5} text={"CARDIO"} />
        </HStack>
        <HStack m={'5px 0'} gap={5} flexDirection={['column', 'row']}>
          <ClassFrame url={class4} text={"HIIT"} />
          <ClassFrame url={class9} text={"Yoga"} />
          <ClassFrame url={class3} text={"Pilates"} />
        </HStack>
        <HStack m={'5px 0'} gap={5} flexDirection={['column', 'row']}>
          <ClassFrame url={class8} text={"Spin/Cycling"} />
          <ClassFrame url={class7} text={"Kickboxing"} />
          <ClassFrame url={class10} text={"Zumba"} />
        </HStack>


        <Link style={{ color: '#a70000', margin: '10px 0' }} onClick={() => window.scrollTo(0, 0)} to='/contact'>CONTACT US FOR MORE CLASSES →</Link>
      </Stack >

      <Footer />

    </div>
  )
}

export default ClassesPage
