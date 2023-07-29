import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function Profile() {
    return (
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '540px' }}
          height={{ sm: '476px', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}>
          <Flex flex={1} bg="blue.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={
                'https://lh3.googleusercontent.com/pw/AIL4fc_big48AKwYvbDE9cHwDaQ6NFQZTY_UW8f_LcVPkeJTiKCSeWdtkhg8dQ2rx4qVwSntF_SBYRBlOXrWJkUA5-zPoc7MPfFanG-vbrDCUVi2iKJvmjXNMBgw57rJmGremgWDIPYFNbtUi7Fr-eXys_dUyaN24LojNHtO6S-P12aPYwKtMojlO1xPLLsVYlxYRsRc5vV_l2f08EK4OB7A1ELSAvxd-9DBe7obdqaRwQmxiriAt_2Mo3O6HBUNNbkGQMy4zKQJjE-5oYL1L986bXyCp1qx-m6bHwSsS8gRxANZ5iYYgp1HFkPVeepRtj9BmQHbxl0aaKPsNnoBExgpL1-EvoFH4hSnv-qpXlCDcO07I1B_C9h69-13GlO78JOJ_6fAsI3igoEXp7E63S6m0VvS6muhAOhiWuDMzWtV0tOuJtyAwFWW3sPvGvthpl9-AySqpzZKfvGYUBEm4UryDM42FBxl-O6Hsgh2lhHfrso7WTb1OcFqjeIaz6rmu3QEj_SxjgXtFsS-nJfiZ66hXy0HXk59SxQneZCVcgUaOHVjt1ljZVSIlpSvduN-5UZN0xR8Y1Y1iltFgokNg8aShhFyVK7UPH-EAQng6KZZnvL8IxJQ99h2EPqJ4-U1ZCNn1umyW56e-STKXYtEPnKXTT2abgrB-SvlMDsengqzOhIQvQLAspLlZxzGJl3ZJmVh1eJT2bTN0DytiE7dYdwivAVoUS-_5g522JgSlkP7LdlSTgW90yMhA42OjpZK20qP1fCapGrJpfiqoUA2dryoF5y8CA4UPx97d1OP4hWCxLwU3eehvnLLQjecR8IrbwhrvcziBXRs0CkyE_Dmm5A3E0W6eZSBNiBSPmqEiSxVwgfaXTEM4I6W7b1nnVSzqBiXYVd7bPiTSq1IzM4FUGzEPA=w632-h632-s-no?authuser=0'
                
              }
              alt="profile-image"
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
             Md Ashad Raza
            </Heading>
            <Text fontWeight={600} color={'red.600'} size="sm" mb={4}>
              @solopreanur
            </Text>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={1}>
              Making Easy for Startup To Fly.
              <Link href={'https://www.ashadraza.com'} color={'blue.500'}><br />
                Let's Fly with us ...
              </Link>
               
            </Text>
            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                #Startup
              </Badge>
            </Stack>
  
            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                _focus={{
                  bg: 'gray.200',
                }}>
                Message
              </Button>
              <Button
              as={'a'}
              href='https://www.linkedin.com/in/md-ashad-raza-a2133921b/h'
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'red.600'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'black',
                  
                }}
                _focus={{
                  bg: 'red.600',
                }}>
                Follow
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    );
  }
