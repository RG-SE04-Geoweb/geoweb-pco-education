import {
    Box,
    Flex,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    VStack,
    Spacer,
    Heading,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import background from "../../..//constants/images/background2.png"


export const InputOutput = () => {
    const [sliderValue1, setSliderValue1] = useState(50)
    const [sliderValue2, setSliderValue2] = useState(500000)
    const [sliderValue3, setSliderValue3] = useState(500000)
    const [dwl, setDWL] = useState(0)
    useEffect(() => {
        const P1 = sliderValue3;
        const P2 = P1 + sliderValue1;
        const P3 = P1 - (P1 * 0.25);
        const Q1 = sliderValue2;
        const Q2 = P1 / (P2 / Q1)
        const beta = Q1 - Q2;
        const delta = P1 - P3;
        const gamma = P2 - P1;

        const dwl = Math.floor((0.5 * beta * gamma) + (0.5 * beta * delta));
        setDWL(dwl)
    }, [sliderValue1, sliderValue2, sliderValue3])

    return (
        <Box backgroundImage={background} height={"834px"}>
            <Flex justifyContent={"center"} alignItems={"center"} py={"100px"}>
                <Box p="4" width={"70%"}>
                    <VStack
                        spacing={10} >
                        <Box px={"20px"} py={"20px"} width={"100%"} height={"100%"} borderWidth="1px" borderRadius="lg" bg={"#24042c"} >

                            <Heading as={"h1"} size={'md'} p="4" textAlign={"center"}>
                                CHOOSE A TAX RATE
                            </Heading>
                            <Slider defaultValue={50} min={0} max={100} aria-label='slider-ex-6' onChange={(val) => setSliderValue1(val)}>
                                <SliderMark
                                    value={sliderValue1}
                                    textAlign='center'
                                    bg='blue.500'
                                    color='white'
                                    mt='3'
                                    ml='-10'
                                    w='20'
                                >
                                    {sliderValue1}%
                                </SliderMark>
                                <SliderTrack>
                                    <SliderFilledTrack />
                                </SliderTrack>
                                <SliderThumb />
                            </Slider>
                        </Box>

                        <Box px={"20px"} py={"20px"} width={"100%"} height={"100%"} borderWidth="1px" borderRadius="lg" bg={"#24042c"} >

                            <Heading as={"h2"} size={'md'} p="4" textAlign={"center"}>
                                CHOOSE HOW MUCH MONEY SOCIETY IS WILLING TO SPEND ON THE PRODUCT
                            </Heading>
                            <Slider defaultValue={500000} min={0} max={1000000} aria-label='slider-ex-6' onChange={(val) => setSliderValue2(val)}>
                                <SliderMark
                                    value={sliderValue2}
                                    textAlign='center'
                                    bg='blue.500'
                                    color='white'
                                    mt='3'
                                    ml='-10'
                                    w='20'
                                >
                                    ${sliderValue2}
                                </SliderMark>
                                <SliderTrack>
                                    <SliderFilledTrack />
                                </SliderTrack>
                                <SliderThumb />
                            </Slider>
                        </Box>

                        <Box px={"20px"} py={"20px"} width={"100%"} height={"100%"} borderWidth="1px" borderRadius="lg" bg={"#24042c"} >

                            <Heading as={"h3"} size={'md'} textAlign={"center"}>
                                OPTIMAL QUANTITY PRODUCED
                            </Heading>
                            <Slider defaultValue={500000} min={0} max={1000000} aria-label='slider-ex-6' onChange={(val) => setSliderValue3(val)}>
                                <SliderMark
                                    value={sliderValue3}
                                    textAlign='center'
                                    bg='blue.500'
                                    color='white'
                                    mt='3'
                                    ml='-10'
                                    w='20'
                                >
                                    ${sliderValue3}
                                </SliderMark>
                                <SliderTrack>
                                    <SliderFilledTrack />
                                </SliderTrack>
                                <SliderThumb />
                            </Slider>
                        </Box>
                    </VStack>
                </Box>
                <Spacer />
                <Box width={"30%"} p="4">

                    <Heading textAlign={'center'}>
                        DWL TO SOCIETY:
                    </Heading>
                    <Box py={"20px"} height={"100%"} borderWidth="1px" borderRadius="lg" bg={"#630497"}>
                        <Heading textAlign={'center'}>
                            {dwl}
                        </Heading>
                    </Box>
                </Box>

            </Flex>

        </Box >
    );
};

