import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function Main() {
    return (
      <Stack minH={'100vh'}  direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            mt={{base:'20',md:'4',lg:''}}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '50%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'pink.400',
                  zIndex: -1,
                }}>
                Technology
              </Text>
              <br />{' '}
              <Text color={'red.600'} as={'span'}>
                Controlling The World !
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              Everything is changing with the time and 
              rapidaly tech is the face of grwoing .
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                bg='white'
                color='black'
                rounded={'full'}
                _hover={{
                  bg: 'black',
                  color:'white'
                }}>
                Talk with Expert
              </Button>
              <Button rounded={'full'}>How we Work </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            rounded={'2xl'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1626908013351-800ddd734b8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80'
            }
          />
        </Flex>
      </Stack>
    );
  }