import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Button,
    Text,
    Image,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { ReactNode } from 'react';
  
 
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={6}
          spacing={8}
          justify={'center'}
          align={'center'}>
           <Button
            as={'a'}
            href='/'
              bg={'white'}><Image src='https://lh3.googleusercontent.com/pw/AIL4fc-DpnatBogPoKT3RZKfk-3j78398wEmUaqbbGFkrvbHYW2btHt05nvcHgWbFikTVebOYuwQk-H5alinixH1x8wmscdon4Th84KYfoasyPxnASy_MZYhxIwvkb8-vXPVsGN1BAxd1HuheiX7JZo2YesTcK9OUq38V6BACDRA04PgUX1CWqhS4XUCwwos1rYmIKONGlzOp1EalsEKdUW2IYQY1NhcCBt22IqJE7DY97oCOKDR4ueEUYn_4QhzHhGOliIcyQE3hV3HoplBABvk8ky38Jj96nf5Vc4g133ef9BFmLhB-CXkJNLlAYkMl_9ZLKTvKzWcpRb77lbkBcdD0IrWwYMo9tQJ20Qe2PZvBhK3s-COWcBQThhH7zznhkHKavX5QwWgAi6wlYagrTTyzXNFI69QJNtEC9SzaWwhZBJM7YtairK4QXbJHty7zAicixnT49tpOmqZk2GPGhMKB7on8g4K5CXiGBt8riQI7IeStpl9GxJIfgPu3zzHxLp_DABtWZ9RCikmTOhfJ36MqKLGVfiORF4_EW88zmYuAYsNVQjJkr-5Qm171a3lPnm6hNV03GhngEvzNK1IQhTFqWt188s8UKvWGq9zp5b-GcNdc2vsCyIVXWdR8pnqi5jutiQwyfeDhu20bdnoIdntlA_9Nsi_Oz4gO6ojDaBtmDi9V40QOgjEll8EEpUc2n9CmBtyVagoPpnfNQEG7M6t4GNRV_1dwywnprXX8dekKpina_dAgMbtIruEz2vDe5R_EnRTrUxjmZUzbCBuSs2KOKSe81JPP2l7saclpS2xHI1E3yvL5f9NEQPBFv42TYHLHSBTHd0-hB6hO2dGuAGa9yhKwndhRv7jKxjY46wb3TQurnFNVy7_LTRDrXJjddfG_Dr2JvulOFAzu6-9Bo43RA=w500-h500-s-no?authuser=0' alt='logo' h='200px' w='200px' /></Button>
            
          <Stack direction={'row'} spacing={6}>
            <Link href={'#'}>Home</Link>

            <Link href={'/about'}>About</Link>

            <Link href={'/blog'}>Blog</Link>

            <Link href={'/contact'}>Contact</Link>

          </Stack>
        </Container>
  
        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}>
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Text>© 2021 DtechFly. All rights reserved         β-version.</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    );
  }
