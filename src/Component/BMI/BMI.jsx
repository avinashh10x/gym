import React, { useState } from 'react'
import './bmi.css'
import { Box, Button, Grid, Heading, Input, Stack, Text } from '@chakra-ui/react'
import bmiBG from '../../assets/img/bg/bg_4.jpg.webp'

const BMI = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmiResult, setBmiResult] = useState(null);

    const calculateBMI = () => {
        const weightInKg = parseFloat(weight);
        const heightInMeters = parseFloat(height) / 100; // Convert height from cm to meters

        if (isNaN(weightInKg) || isNaN(heightInMeters) || heightInMeters <= 0) {
            setBmiResult('Invalid input. Please enter valid values.');
            return;
        }

        const bmi = weightInKg / (heightInMeters * heightInMeters);
        setBmiResult(`Your BMI is ${bmi.toFixed(2)}`
        )
    }



    return (
        <div>
            <Stack alignItems={'center'} padding={'4%'}>
                <Text color={'#a70000'}>GET YOUR BODY MAX INDEX</Text>
                <Heading textAlign={'center'} padding={'0 20%'}>WHAT IS YOUR <span>BMI</span></Heading>
                <Box
                    className='bmiframe'
                    // bgImage={bmiBG}
                    mt={15} width={'95%'}
                    h={500}
                    outline={'1px solid black'}
                    padding={['0', '50px']}
                    display={'flex'}
                    justifyContent={['center', 'flex-start']}
                    alignItems={'center'}
                    position={'relative'}
                    bgSize={'cover'}
                >
                    <Grid
                        className='bmi'
                        p={10} shadow="md"
                        position={'absolute'}
                        zIndex={5}

                        borderWidth="1px"
                        borderRadius="md"
                        w={['90%', '30%']}
                    >
                        <Stack >
                            <Text fontSize="xl" fontWeight="bold" textAlign={'center'}>
                                BMI Calculator
                            </Text>
                            <Input

                                _focus={{
                                    boxShadow: 'none',
                                    borderColor: 'red.800',
                                }}
                                type="number"
                                placeholder="Enter weight in kg"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                            />
                            <Input
                                type="number"
                                _focus={{
                                    boxShadow: 'none',
                                    borderColor: 'red.800',
                                }}
                                placeholder="Enter height in cm"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                            />
                            <Button colorScheme="red" onClick={calculateBMI}>
                                Calculate BMI
                            </Button>
                            {bmiResult && <Text>{bmiResult}</Text>}
                        </Stack>
                    </Grid>
                </Box>
            </Stack>
        </div>
    )
}

export default BMI
