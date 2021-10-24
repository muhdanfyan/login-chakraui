import { Flex, Heading, Input, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'

const IndexPage = () => {
    const { toggleColorMode } = useColorMode()
    const formbackground = useColorModeValue("gray.100", "gray.700")
    return (
        <Flex height="210vg" alignItems="center" justifyContent="center" mt={10}>
            <Flex direction="column" background={formbackground} p={12} rounded={6}>
                <Heading mb={6}>Log in</Heading>
                <Input placeholder="lazar@chakra-ui.com" variant="filled" mb={3} type="email" />
                <Input placeholder="**********" variant="filled" mb={6} type="password" />
                <Button colorScheme="teal">Log in</Button>
                <Button onClick={toggleColorMode}> Toggle Color Mode </Button>
            </Flex>
        </Flex>
    )
}

export default IndexPage
