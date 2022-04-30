import {Flex, Heading } from "@chakra-ui/react";


export const Header = () => {
  
    return(
        <Flex bg='black' color='white' m='0' p='8' align='center' justifyContent='center'>
            <Heading as='h1' size='2xl'>Chainlink Reference Guide (Hardhat Version)</Heading>
        </Flex>
    );
}
