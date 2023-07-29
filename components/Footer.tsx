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
              bg={'white'}><Image src='https://lh3.googleusercontent.com/pw/AIL4fc_4S-3SjOHyuI-rMkKNHkw6g8oFqvhhTbqWj69tfEA_iw3KjZTQLEX3rMxCIXUfcEhGMJWC9CXXc7pqyKHFxoEFuT1bSPydNwFvjmNwGFg6D3YRHmz6_RZDfrySQJpUZ154M_fCwKqtN188-YPfXQl1EAw56a7quar7Wa2Y69aZBFnRsGN1cXtv7IOLpCn9ST9EIJFM-KxjIpbKWH6J1YCKQs7RBhHQDVS3GXwLS_ibAm1HBywS4xGPk1dSff1I-lNVt5IzQHi_UifijlHF5GWqd8jVLVNGWYKQE9M6PJCETEY4-8Xi8i8qaoahOUKVxADqmSBPjU2l2L5nlHXR1tVxz4rde83TCNoQSvae0-jg8ZoGrMHcfT4fDLfh6XKRwMWQSZnJnfdCIRAh9F5ZkGMBZk4mikXKV_zeOr3unwxjUmCYtrrn5Mf3UN_diBZDPSUztV_acj45VQm8TH4n3etdQn9y1Yr_S7uwj1pkeQ2Q4ubSL87eOvPJI-L90Ttkw95XUQCCU3uEMmZlt5lvAK0PFxHiLen0edOtsjrbkkgHgvW7Iy1Ll4KNxCGQA3sc3zlUMiAieH6gbEiHZDthXf-soHE4Ezg7SmSrWQGOQiMFTwLpfNhVSNveArgzoY39BNg8esUfPtGjiTKLaWQjVkEwycnIV58Rk7Bw6zdvfUWl__0BLYP6v3-D81dr1MviwcbP_AHAUvIJ-6X39VW0ZT_uL96V012D2R7a21Lv3854r4X-WXiuZWeo1XSTN6xEiIE-9o_djZadYBnrQvk1l3aW2c2NW7tkNpbN5zrSKODlhGzFeWl107VY4stw3rTdRMXc1ZGAU6UFjj60YRUxRbTd_TPFqcRy5e5-PtFvZLp4L0CfEdiCkR_-4yrs5LtHS7UCCHWmybwJPFstP6KaXw=w500-h500-s-no?authuser=0' alt='logo' h='200px' w='200px' /></Button>
            
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
