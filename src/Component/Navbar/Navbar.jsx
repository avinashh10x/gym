import React from 'react';
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure,
    useMediaQuery,
    VStack,
    Image,
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';

import './navbar.css';
import logo from '../../assets/img/logo1.jpeg'
import { Link } from 'react-router-dom';

function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    // Use Chakra UI's useMediaQuery hook to check screen width
    const [isSmallerThan700] = useMediaQuery('(max-width: 700px)');

    return (
        <>
            {isSmallerThan700 ? (
                <>
                    <nav style={{ zIndex: '1' }}>
                        <a href="/"><img src={logo} className='logo' alt="" /></a>
                        <Button ref={btnRef} variant={'ghost'} colorScheme='#a70000' onClick={onOpen}>
                            <HamburgerIcon />
                        </Button>

                        <Drawer
                            isOpen={isOpen}
                            placement='right'
                            onClose={onClose}
                            finalFocusRef={btnRef}

                        >
                            <DrawerOverlay
                                style={{
                                    backdropFilter: 'blur(2px)', // Adjust the blur intensity as needed
                                }}
                            />
                            <DrawerContent background='#121617'  >
                                <DrawerHeader display={'flex'} justifyContent={'center'}>
                                    <Image borderRadius={'50%'} width={'150px'} src={logo}></Image>
                                </DrawerHeader>
                                <DrawerBody>
                                    <VStack alignItems={'center'}>
                                        <Button variant={'ghost'} color={'#a70000'}>
                                            <Link to={'/'}>Home</Link>
                                        </Button>
                                        <Button variant={'ghost'} color={'#a70000'}>
                                            <Link to={'/classes'}>Classes </Link>
                                        </Button>
                                        <Button variant={'ghost'} color={'#a70000'}>
                                            <Link to={'/gallery'}>gallery</Link>
                                        </Button>
                                        <Button variant={'ghost'} color={'#a70000'}>
                                            <Link to={'/about'}>About</Link>
                                        </Button>
                                        {/* <Button variant={'ghost'} color={'#a70000'}>
                                            <Link to={'/contact'}>Schedules </Link>
                                        </Button> */}
                                        {/* <Button variant={'ghost'} color={'#a70000'}>
                                            <Link to={'/contact'}>News </Link>
                                        </Button> */}
                                        <Button variant={'ghost'} color={'#a70000'}>
                                            <Link to={'/contact'}>Contact </Link>
                                        </Button>
                                        <Button variant={'ghost'} color={'#a70000'}>
                                            <Link to={'/join'}>Become a Member </Link>
                                        </Button>
                                        <Button variant={'link'} className="buttonStyles">
                                            <DrawerCloseButton color={'#a70000'} />
                                        </Button>
                                    </VStack>
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>


                    </nav>

                </>
            ) : (
                <nav style={{ zIndex: '2' }} >
                    <a href='/'><img src={logo} className='logo' alt="" /></a>
                    <ul>
                        {/* Duplicate your navigation items here for the drawer */}
                        <li><Link className='linkodcontact' to='/'>Home</Link></li>
                        {/* <li><Link className='linkodcontact' to='/trainer'>Trainer</Link></li> */}
                        <li><Link className='linkodcontact' to='/classes'>Classes</Link></li>
                        <li><Link className='linkodcontact' to='/gallery'>Gallery</Link></li>
                        <li><Link className='linkodcontact' to='/about'>About</Link></li>
                        {/* <li><Link className='linkodcontact' to='/schedule'>Schedules</Link></li> */}
                        <li><Link className='linkodcontact' to='/contact'>Contact</Link></li>
                        <li><Link className='linkodcontact' to='/join'>Become a <span>Member</span></Link></li>
                    </ul>
                </nav>
            )}
        </>
    );
}

export default Navbar;
