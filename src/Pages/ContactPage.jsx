
import React, { useState } from 'react';
import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { AiFillFacebook, AiFillHome, AiFillInstagram, AiFillMail, AiFillPhone, AiFillTwitterSquare, AiFillWechat } from 'react-icons/ai';
import { Link } from 'react-router-dom';


import logo from '../assets/img/logo1.jpeg';
import img from '../assets/img/bg/bg_2.jpg.webp'


import Navbar from '../Component/Navbar/Navbar';
import { BgImg } from '../Component/Hero/Hero';

const ContactPage = () => {
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('contact.php', {
        method: 'POST',
        body: formData,
      });

      const data = await response.text();

      if (data === 'success') {
        setSuccessMessageVisible(true);
        setErrorMessage('');
        form.reset();
        setTimeout(() => {
          setSuccessMessageVisible(false);
        }, 3000);
      } else {
        setErrorMessage('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <Navbar />

      <BgImg url={img} heading={'"Muscles are earned, not given"'} text={'Tailored fitness journeys for every body and every goal.'} />


      <Stack alignItems={'center'} padding={'4%'}>
        <Text color={'#a70000'}>CONTACT US</Text>
        <Heading textAlign={'center'} padding={'0 20%'}>GET IN <span>TOUCH </span>WITH US</Heading>
      </Stack>




      <Stack justifyContent={'center'} flexDirection={['column', 'row']} alignItems={'center'} mb={10}>

        <Stack gap={['50', '0']} flexDirection={['column', 'row']} w={['100%', '90%']} justifyContent={'space-evenly'} alignItems={'center'}>


          <VStack w={['90%', '50%']} gap={['50', '0']}>
            <HStack justifyContent={'space-between'} textAlign={'center'} alignItems={'center'} flexDirection={['column', 'row']} gap={10}  w={['90%', '100%']}>

              <Image src={logo} boxSize={150} w={['', '30%']} />
              <HStack w={'100%'} p={2} gap={0} >
                <VStack alignItems={'flex-start'} w={['48%', '45%']} >
                  <Heading fontSize="1.5rem">Explore</Heading>
                  <Link textAlign={'left'} to={'/about'} onClick={() => window.scrollTo(0, 0)} className='linkodcontact'>&rarr; &nbsp; About Us</Link>
                  <Link textAlign={'left'} to={'/gallery'} onClick={() => window.scrollTo(0, 0)} className='linkodcontact'>&rarr; &nbsp; Visit Gallery</Link>
                  <Link textAlign={'left'} to={'/classes'} onClick={() => window.scrollTo(0, 0)} className='linkodcontact'>&rarr; &nbsp; View Classes</Link>
                </VStack>

                <VStack alignItems={'flex-start'} w={['48%', '48%']} >
                  <Heading fontSize="1.5rem">Our Contacts</Heading>
                  <Text display={'flex'} alignItems={'center'} gap={3}><AiFillHome />Punjab | INDIA</Text>
                  <Text display={'flex'} alignItems={'center'} gap={3}><AiFillPhone />6239378916</Text>
                  <Text display={'flex'} alignItems={'center'} gap={3}><AiFillMail />Raavaannn@gmail.com</Text>
                </VStack>
              </HStack>
            </HStack>



            <form id="contact-form" action="/contact.php" method="post" onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Box w={'90%'} border={'1px solid #a70000'} borderRadius={10} p={10}>
                <Stack gap={5}>
                  <Text fontSize="xl" textTransform={'uppercase'} fontWeight="bold" textAlign={'center'}>
                    contact form
                  </Text>
                  <HStack gap={5}>
                    <Input
                      _focus={{
                        boxShadow: 'none',
                        borderColor: 'red.800',
                      }}
                      type="text"
                      name="name"
                      placeholder="NAME"
                    />
                    <Input
                      type="email"
                      _focus={{
                        boxShadow: 'none',
                        borderColor: 'red.800',
                      }}
                      name="email"
                      placeholder="ABC@EMAIL.COM"
                    />
                  </HStack>
                  <Textarea
                    h={'160px'}
                    _focus={{
                      boxShadow: 'none',
                      borderColor: 'red.800',
                    }}
                    name="message"
                  />
                  <Button type="submit" colorScheme="red">
                    SEND
                  </Button>
                </Stack>
              </Box>
            </form>

            {successMessageVisible && (
              <div className="sent-message" style={{ display: 'block' }}>
                Message sent successfully!
              </div>
            )}

            {errorMessage && (
              <div className="error-container" style={{ display: 'block' }}>
                {errorMessage}
              </div>
            )}



          </VStack>



          <Box w={['80%', '40%']} h={['30%', '100%']}>

            <iframe
              title="Google Maps"
              className='map'
              height={'500px'}
              width={'100%'}
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d52481.847860112524!2d75.546464!3d31.308319!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDE4JzM1LjQiTiA3NcKwMzMnMDkuMyJF!5e1!3m2!1sen!2sus!4v1701972192289!5m2!1sen!2sus"
              style={{ border: '2px solid #a70000', borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <HStack justifyContent={'center'} fontSize={['20px', '50px']} p={3} m={['5px', '0']} gap={['40px', '20px']}>
              <Link href="#" className="icon-link"><AiFillInstagram /></Link>
              <Link href="#" className="icon-link"><AiFillTwitterSquare /></Link>
              <Link href="#" className="icon-link"><AiFillFacebook /></Link>
              <Link href="#" className="icon-link"><AiFillWechat /></Link>
            </HStack>
          </Box>
        </Stack>
      </Stack>
    </div>
  )
}



export default ContactPage
