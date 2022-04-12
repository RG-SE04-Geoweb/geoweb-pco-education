import React from "react";
import { Box, Image, Heading, HStack, Text, Button, Link, SimpleGrid, Center } from "@chakra-ui/react";
import { irlList } from "../../../constants/data/IRLData";
import background from "../../../constants/images/background2.png"

export const PcoRealLife = () => {
    return (
        <Box py={"100px"} backgroundImage={background} >
            <SimpleGrid minChildWidth='400px' spacing='40px' px={"40px"}>
                {irlList.map((project) => {
                    return (
                        <Center>
                            <Box maxW='sm' height={'100%'} borderWidth='1px' borderRadius='lg' overflow='hidden' p={15} bg={'whiteAlpha.300'} key={project.name} display={'flex'} flexDirection={'column'} >
                                <HStack pb={"10px"}>
                                    <Image src={project.image} boxSize='50px' />
                                    <Heading as="h1" size={"lg"} > {project.name}
                                    </Heading>
                                </HStack>
                                <Heading as="h2" size={"md"}  >WTF is it?</Heading>
                                <Text color={"whiteAlpha.900"} >
                                    {project.wtfIsIt}
                                </Text>
                                <Heading as="h2" size={"md"}>Why does this matter?</Heading>
                                <Text color={"whiteAlpha.900"} pb={"40px"}>
                                    {project.whyDoesThisMatter}
                                </Text>

                                <Link href={project.link} target="_blank" marginTop={"auto"}>
                                    <Button>
                                        {project.name}
                                    </Button>
                                </Link>

                            </Box>
                        </Center>)
                })}

            </SimpleGrid>
        </Box >
    );
};
