import {
  Box,
    Button,
    color,
    Flex,
    Heading,
    Image,
    keyframes,
  
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';

  import  '../styles/globals.css';

  export default function Main() {
    return (
      <div className='bg-hero bg-no-reapet bg-center bg-cover' >
       
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
                  bg: 'white',
                  color:'white',
                  zIndex: -1,
                }}>
                Technology
              </Text>
              <br />{' '}
              
            <div className='typewriter-contain'>
              <div className='typewriter'>
                Controlling The World <span className='text-white'>!</span>
              </div>
            </div>
            
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              Everything is changing with the time and 
              rapidaly tech is the face of grwoing .
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                bg='red.600'
                color='white'
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
      </Stack>
     </div>
    );
  }