 import { Image,Box, Heading,Text, Flex,FormControl,FormLabel,Input, Checkbox,Button, Center } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
export default function Login(){
    const [state,setState]=useState(true)
    const handleClick = ()=> {
            setState(!state)
    }
    return (
        <Box>
            
            <Box>
                <Flex>
                    <Box w="40%">
                        <Box>
                            <Image w="100px" pl="20px" pt="20px" src="https://i.ibb.co/0ChLk5K/Mail-logo.png"/>
                        </Box>
                        <Box paddingTop="50px" pl={"20px"} w="60%" >
                            <Flex>
                                <Box boxSize={"500px"}>
                                    <Box textAlign={"left"} mb="20px">
                                        <Heading fontFamily={"inherit"} fontStyle="inherit" fontWeight={"inherit"}>Log In</Heading>
                                        <Flex>
                                            <Text fontSize="20px"> Need a Mailchimp account?</Text> <Text color="teal" borderBottom={"1px solid teal"} fontSize={"20px"}><Link href="/signup" >Create an account</Link> </Text>
                                        </Flex>
                                    </Box>
                                    <Box textAlign={"left"}>
                                        <FormControl>
                                            <FormLabel>Username or  Email</FormLabel>
                                                <Input w="500px" type='email' />
                                        </FormControl>
                                        <FormControl>
                                            <Flex justifyContent={"space-between"}>
                                                <FormLabel>Pasword </FormLabel>
                                                <FormLabel onClick={handleClick} color="teal">{state? <ViewIcon mr="10px" /> : <ViewOffIcon mr="10px" />}{state? "Show" : "Hide"}   </FormLabel>
                                            </Flex>
                                            <Input w="500px" type='password' />
                                        </FormControl>
                                        {/* <Flex mt="20px" position={"relative"} >
                                            <Checkbox position={"absolute"} top="5px"/>
                                            <Text ml="30px">
                                                    I don't want to recieve emails about MailChimp and related to Intuit products
                                                    and feature updates, marketing best prices and pramotion from MailChimp.
                                            </Text> 
                                            
                                        </Flex>
                                        <Text mt="20px">By creating an account, you agree to our <Link href="https://mailchimp.com/legal/terms?_ga=2.20372479.611262178.1671007721-350671267.1670656525" color="teal" >Terms</Link> and have read and acknowledge the 
                                        <Link color="teal" href="https://www.intuit.com/privacy/statement/">Global Privacy Statement</Link>. 
                                        </Text> */}
                                        <Button borderRadius={"0px"} mt="20px" w="500px" h="50px" bg="teal" color="white" fontSize={"25px"}>Log In</Button>
                                        
                                            <Center mt="10px">
                                                <Flex>
                                                    <Checkbox w="20px" mr="10px"/>
                                                    <Text fontSize={"20px"} >Keep me logged in</Text>
                                                </Flex>
                                            </Center>
                                            <Center mt="15px">
                                                    <Text color={"teal"} borderBottom={"1px solid teal"} fontSize={"16px"}>
                                                        <Link href="https://login.mailchimp.com/login/forgot-username/">Forgot username?</Link> .
                                                        <Link href="https://login.mailchimp.com/login/forgot/">Forgot password?</Link>
                                                    </Text>
                                                    
                                            </Center>
                                            <Center mt="10px">
                                            <Text color={"teal"} borderBottom={"1px solid teal"} fontSize={"16px"}>
                                                        <Link href="">Can't Log In?</Link>
                                                    </Text>
                                            </Center>
                                        
                                        {/* <Text fontFamily={"5px"} mt="20px">
                                                Invisible reCAPTCHA by Google <Link color="teal" href="https://policies.google.com/privacy"> Privacy Policy</Link>
                                                and <Link color="teal" href="https://policies.google.com/terms"> Terms of Use</Link>.
                                        </Text> */}
                                    </Box>
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                    <Box w="60%" >
                            <Image w="120%" h="112%" src="https://i.ibb.co/FJrpN2V/Screenshot-149.png" />
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}