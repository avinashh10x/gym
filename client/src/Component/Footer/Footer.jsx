import React from 'react'
import './Footer.css'
import { Box, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import logo from '../../assets/img/logo1.jpeg'
import { Link } from 'react-router-dom'
import { AiFillFacebook, AiFillHome, AiFillInstagram, AiFillMail, AiFillPhone, AiFillTwitterSquare, AiFillWechat } from 'react-icons/ai'

const Footer = () => {
    return (
        <div>
            <Stack alignItems={'center'} padding={'4%'}>
                <Text color={'#a70000'}>CONTACT US</Text>
                <Heading textAlign={'center'} padding={'0 20%'}>GET IN <span>TOUCH </span>WITH US</Heading>
            </Stack>
            <Stack h={['750', '350px']} fontSize={['0.8rem', '1rem']} display={'flex'} justifyContent={['space-evenly', 'center']} alignItems={'center'} flexDirection={['column', 'row']} p={['10px 30px', '10px 100px']} >

                <VStack w={['80%', '30%']} textAlign={'left'} alignItems={['center', 'flex-start']}>
                    <img src={logo} style={{ width: '40%' }} alt="" srcset="" />
                    <Text p={5}>"Get in touch with us to explore a world of fitness possibilities and embark on a journey towards a healthier, happier you."</Text>

                    <HStack fontSize={['20px', '50px']} p={3} m={['5px', '0']} gap={['40px', '5px']}>
                        <Link to={'#'} target='blank' className="icon-link"><AiFillInstagram /></Link>
                        <Link to={'#'} target='blank' className="icon-link"><AiFillTwitterSquare /></Link>
                        <Link to={'#'} target='blank' className="icon-link"><AiFillFacebook /></Link>
                        <Link to={'#'} target='blank' className="icon-link"><AiFillWechat /></Link>
                    </HStack>
                </VStack>

                <HStack justifyContent={'space-around'} textAlign={'left'} w={['80%', '40%']}>
                    <VStack alignItems={'flex-start'} >
                        <Heading fontSize="1.5rem">Explore</Heading>
                        <Link textAlign={'left'} to={'/about'} onClick={() => window.scrollTo(0, 0)} className='linkodcontact'>&rarr; &nbsp; About Us</Link>
                        <Link textAlign={'left'} to={'/gallery'} onClick={() => window.scrollTo(0, 0)} className='linkodcontact'>&rarr; &nbsp; Visit Gallery</Link>
                        <Link textAlign={'left'} to={'/classes'} onClick={() => window.scrollTo(0, 0)} className='linkodcontact'>&rarr; &nbsp; Awesome Classes</Link>
                    </VStack>

                    <VStack alignItems={'flex-start'} w={'50%'} >
                        <Heading fontSize="1.4rem">Our Contacts</Heading>
                        <Text display={'flex'} alignItems={'center'} gap={3}><AiFillHome />Punjab | INDIA</Text>
                        <Text display={'flex'} alignItems={'center'} gap={3}><AiFillPhone />+91 6239378916</Text>
                        <Text display={'flex'} alignItems={'center'} gap={3}><AiFillMail />Raavaannn@gmail.com</Text>
                    </VStack>
                </HStack>
                <Box w={['80%', '25%']} h={['30%', '90%']}>

                    <iframe
                        title="Google Maps"
                        height={'100%'}
                        width={'100%'}
                        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d52481.847860112524!2d75.546464!3d31.308319!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDE4JzM1LjQiTiA3NcKwMzMnMDkuMyJF!5e1!3m2!1sen!2sus!4v1701972192289!5m2!1sen!2sus"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </Box>
            </Stack>
            <Text h={5} fontSize={'.7rem'} textAlign={'center'}> Made with ❤️ by <b> <a className='linkodcontact' href="https://bluemonkey.7vfail.com/" target='blank'>bluemonkey</a></b></Text>
        </div>
    )
}

export default Footer
