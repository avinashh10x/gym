import React, { useState } from 'react';
import { Box, Button, Grid, Heading, Input, Stack, Text } from '@chakra-ui/react';
import bmiBG from '../../assets/img/bg/bg_4.jpg.webp';
import './bmi.css'

const BMI = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmiResult, setBmiResult] = useState(null);
    const [bmiColor, setBmiColor] = useState(''); // Added state for BMI color

    const calculateBMI = () => {
        const weightInKg = parseFloat(weight);
        const heightInMeters = parseFloat(height) / 100; // Convert height from cm to meters

        if (isNaN(weightInKg) || isNaN(heightInMeters) || heightInMeters <= 0) {
            setBmiResult('Invalid input. Please enter valid values.');
            setBmiColor('red'); // Set color for invalid input
            return;
        }

        const bmi = weightInKg / (heightInMeters * heightInMeters);

        if (bmi < 18.5) {
            setBmiResult(`Your BMI is ${bmi.toFixed(2)} and you are underweight`);
            setBmiColor('red');
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            setBmiResult(`Your BMI is ${bmi.toFixed(2)} and you are Normal`);
            setBmiColor('green');
        } else if (bmi >= 25 && bmi <= 29.9) {
            setBmiResult(`Your BMI is ${bmi.toFixed(2)} and you are overweight`);
            setBmiColor('orange');
        } else if (bmi >= 30) {
            setBmiResult(`Your BMI is ${bmi.toFixed(2)} and you are obese`);
            setBmiColor('red');
        }
    };

    return (
        <div>
            <Stack alignItems={'center'} padding={'4%'}>
                <Text color={'#a70000'}>GET YOUR BODY MAX INDEX</Text>
                <Heading textAlign={'center'} padding={'0 20%'}>WHAT IS YOUR <span>BMI</span></Heading>
                <Box
                    className='bmiframe'
                    bgImage={bmiBG}
                    mt={15}
                    width={'95%'}
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
                        p={10}
                        shadow="md"
                        position={'absolute'}
                        zIndex={5}
                        borderWidth="1px"
                        borderRadius="md"
                        w={['90%', '30%']}
                        style={{ borderColor: bmiColor }} // Apply color to border
                    >
                        <Stack>
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
                            {bmiResult && <Text style={{ color: bmiColor }}>{bmiResult}</Text>}
                        </Stack>
                    </Grid>
                </Box>
            </Stack>
        </div>
    );
};

export default BMI;
