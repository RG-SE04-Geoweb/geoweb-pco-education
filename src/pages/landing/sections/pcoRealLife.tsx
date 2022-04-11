import React from "react";
import { Box, Image, Heading, HStack, Flex, Text, VStack, Button, Link, Icon } from "@chakra-ui/react";
import { irlList } from "../../../constants/data/IRLData";
export const PcoRealLife = () => {
    return (
        <Box py={"100px"} >
            <Flex justifyContent={'center'} alignContent={'center'}>
                <HStack spacing={3}>
                    {irlList.map((project) => {
                        return (
                            <Box maxW='sm' height={'100%'} borderWidth='1px' borderRadius='lg' overflow='hidden' p={15} flex="1" bg={'whiteAlpha.300'} key={project.name} display={'flex'} flexDirection={'column'} >
                                <VStack alignItems={'flex-start'}>
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

                                </VStack>
                                <Link href={project.link} target="_blank" marginTop={"auto"}>
                                    <Button>
                                        {project.name}
                                    </Button>
                                </Link>

                            </Box>)
                    })}

                </HStack>
            </Flex >
        </Box >
    );
};
