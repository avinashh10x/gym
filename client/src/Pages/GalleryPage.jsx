import React from 'react'
import Hero, { BgImg } from '../Component/Hero/Hero'
import { Box, HStack, Heading, Image, Link, Stack, Text, VStack } from '@chakra-ui/react'
import gallerypic1 from '../assets/img/gallery/gallery-1.jpg.webp'
import gallerypic2 from '../assets/img/gallery/gallery-2.jpg.webp'
import gallerypic3 from '../assets/img/gallery/gallery-3.jpg.webp'
import gallerypic4 from '../assets/img/gallery/gallery-4.jpg.webp'
import gallerypic5 from '../assets/img/gallery/gallery-5.jpg.webp'
import gallerypic6 from '../assets/img/gallery/gallery-6.jpg.webp'
import gallerypic7 from '../assets/img/gallery/gallery-7.jpg.webp'
import Footer from '../Component/Footer/Footer'
import Navbar from '../Component/Navbar/Navbar'
import { useMediaQuery } from '@chakra-ui/react';

const GalleryPage = () => {


  const BlogPost1 = ({ url, date, heading, text, comments }) => {
    return (
      <Link href="https://youtu.be/7Bgh1RtsulU?si=OaSN1Umpem47geIY" w={['90%', '45%']} isExternal _hover={{ textDecoration: 'none' }}>
        <HStack flexDirection={['column', 'row']} cursor={'pointer'}>
          <Box h={'100%'} width={['90%', '50%']}>
            <Image src={url} h={'100%'} objectFit={'cover'} borderRadius={5} />
          </Box>
          <VStack gap={['1', '5']} w={['90%', '50%']} h={'100%'} alignItems={'flex-start'} padding={'10px 0px'}>
            <Text textTransform={'uppercase'} fontSize={['.5rem', '1rem']}>
              {date} &nbsp; <span>{comments} comments</span>
            </Text>
            <Heading textTransform={'uppercase'} fontSize={['1rem', '1.5rem']}>
              {heading}
            </Heading>
            <Text fontSize={['.7rem', '1rem']} color={'gray'}>
              {text}
            </Text>
          </VStack>
        </HStack>
      </Link>
    );
  };


  const BlogPost2 = ({ url, date, heading, text, comments }) => {
    return (
      <Link href="https://youtu.be/7Bgh1RtsulU?si=OaSN1Umpem47geIY" w={['90%', '45%']} isExternal _hover={{ textDecoration: 'none' }}>
        <HStack flexDirection={['column', 'row']}  cursor={'pointer'} >
          <VStack gap={['1', '5']} w={['90%', '50%']} h={'100%'} alignItems={'flex-start'} padding={'10px 0px'} >
            <Text textTransform={'uppercase'} fontSize={['.5rem', '1rem']}>{date} &nbsp; <span>{comments} comments</span></Text>
            <Heading textTransform={'uppercase'} fontSize={['1rem', '1.5rem']}>{heading}</Heading>
            <Text fontSize={['.7rem', '1rem']} color={'gray'} >{text} </Text>
          </VStack>
          <Box h={'100%'} width={['90%', '50%']}>
            <Image src={url} h={'100%'} objectFit={'cover'} borderRadius={5} />
          </Box>
        </HStack>
      </Link>
    )
  }
  const [isSmallerThan700] = useMediaQuery('(max-width: 700px)');

  return (
    <div>
      {/* <Hero /> */}
      <Navbar />



      <BgImg url={gallerypic2} heading={'Community Bonding'} text={'Join a community of fitness enthusiasts who support and motivate each other.'} />




      <Stack>
        <Stack alignItems={'center'} mb={5} padding={'4%'}>
          <Text color={'#a70000'}>OUR GALLERY</Text>
          <Heading textAlign={'center'} padding={'0 20%'}>RECENT BLOGS </Heading>
        </Stack>

        <Stack alignItems={'center'}>
          <HStack flexDirection={['column', 'row']} alignItems={'center'} justifyContent={'center'} m={5} gap={5}>
            <BlogPost1 url={gallerypic1} date={'dec.20, 2020'} comments={'5'} heading={'really good workout, can feel it working'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nulla laboriosam, dicta, rem eveniet, dolores '} />
            <BlogPost1 url={gallerypic2} date={'dec.20, 2020'} comments={'5'} heading={'really good workout, can feel it working'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nulla laboriosam, dicta, rem eveniet, dolores '} />
          </HStack>

          {isSmallerThan700 ? (
            <>
              <HStack flexDirection={['column', 'row']} alignItems={'center'} justifyContent={'center'} m={5} gap={5}>
                <BlogPost1 url={gallerypic5} date={'dec.20, 2020'} comments={'5'} heading={'really good workout, can feel it working'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nulla laboriosam, dicta, rem eveniet, dolores '} />
                <BlogPost1 url={gallerypic4} date={'dec.20, 2020'} comments={'5'} heading={'really good workout, can feel it working'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nulla laboriosam, dicta, rem eveniet, dolores '} />
              </HStack>
            </>
          ) : (
            <HStack flexDirection={['column', 'row']} alignItems={'center'} justifyContent={'center'} m={5} gap={5}>
              <BlogPost2 url={gallerypic5} date={'dec.20, 2020'} comments={'5'} heading={'really good workout, can feel it working'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nulla laboriosam, dicta, rem eveniet, dolores '} />
              <BlogPost2 url={gallerypic4} date={'dec.20, 2020'} comments={'5'} heading={'really good workout, can feel it working'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nulla laboriosam, dicta, rem eveniet, dolores '} />
            </HStack>
          )}

          <HStack flexDirection={['column', 'row']} alignItems={'center'} justifyContent={'center'} m={5} gap={5}>
            <BlogPost1 url={gallerypic6} date={'dec.20, 2020'} comments={'5'} heading={'really good workout, can feel it working'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nulla laboriosam, dicta, rem eveniet, dolores '} />
            <BlogPost1 url={gallerypic7} date={'dec.20, 2020'} comments={'5'} heading={'really good workout, can feel it working'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nulla laboriosam, dicta, rem eveniet, dolores '} />
          </HStack>

        </Stack>


      </Stack>

      <Footer />

    </div >
  )
}

export default GalleryPage
