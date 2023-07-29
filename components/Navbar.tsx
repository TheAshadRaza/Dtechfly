import React , {useState} from 'react';

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { redirect } from 'next/dist/server/api-utils';

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
    as="header" 
    position="fixed" 
   className='nav w-full bg-white z-50'
        color={useColorModeValue('gray.600', 'white')}
        minH={'80px'}
        py={{ base: 1}}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
                >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        align={'center'}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            width ={useBreakpointValue({base:'170px', md:'170px'})}
            color={useColorModeValue('gray.800', 'white')}>
              <Button as='a' href='/' bg={'tranparent'} 
            width ={useBreakpointValue({base:'180px', md:'200px'})}

              >
                <Image src='https://lh3.googleusercontent.com/pw/AIL4fc_4S-3SjOHyuI-rMkKNHkw6g8oFqvhhTbqWj69tfEA_iw3KjZTQLEX3rMxCIXUfcEhGMJWC9CXXc7pqyKHFxoEFuT1bSPydNwFvjmNwGFg6D3YRHmz6_RZDfrySQJpUZ154M_fCwKqtN188-YPfXQl1EAw56a7quar7Wa2Y69aZBFnRsGN1cXtv7IOLpCn9ST9EIJFM-KxjIpbKWH6J1YCKQs7RBhHQDVS3GXwLS_ibAm1HBywS4xGPk1dSff1I-lNVt5IzQHi_UifijlHF5GWqd8jVLVNGWYKQE9M6PJCETEY4-8Xi8i8qaoahOUKVxADqmSBPjU2l2L5nlHXR1tVxz4rde83TCNoQSvae0-jg8ZoGrMHcfT4fDLfh6XKRwMWQSZnJnfdCIRAh9F5ZkGMBZk4mikXKV_zeOr3unwxjUmCYtrrn5Mf3UN_diBZDPSUztV_acj45VQm8TH4n3etdQn9y1Yr_S7uwj1pkeQ2Q4ubSL87eOvPJI-L90Ttkw95XUQCCU3uEMmZlt5lvAK0PFxHiLen0edOtsjrbkkgHgvW7Iy1Ll4KNxCGQA3sc3zlUMiAieH6gbEiHZDthXf-soHE4Ezg7SmSrWQGOQiMFTwLpfNhVSNveArgzoY39BNg8esUfPtGjiTKLaWQjVkEwycnIV58Rk7Bw6zdvfUWl__0BLYP6v3-D81dr1MviwcbP_AHAUvIJ-6X39VW0ZT_uL96V012D2R7a21Lv3854r4X-WXiuZWeo1XSTN6xEiIE-9o_djZadYBnrQvk1l3aW2c2NW7tkNpbN5zrSKODlhGzFeWl107VY4stw3rTdRMXc1ZGAU6UFjj60YRUxRbTd_TPFqcRy5e5-PtFvZLp4L0CfEdiCkR_-4yrs5LtHS7UCCHWmybwJPFstP6KaXw=w500-h500-s-no?authuser=0' alt='logo' width={'170px'} 
                  height={useBreakpointValue({base:'180px', md:'190px'})}
            />
                </Button>
           
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href='signin'>
            Sign In
          </Button>
          <Button
             as='a'
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'red.600'}
            href='/signup'
            _hover={{
              bg: 'black',
            }}>
            Sign Up
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'md'}
                fontWeight={800}
                color={'black'}
                _hover={{
                  textDecoration: 'none',
                  color: 'red.600',
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'red.600' }}
            fontWeight={800}>
            {label}
          </Text>
          <Text fontSize={'md'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'red.600'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={24}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={4}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={900}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={8}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={4}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Softwares',
    children: [
      {
        label: 'Software Development',
        subLabel:'Software that full fill your requirement',
        href: '#',
      },
      {
        label: 'Custom Software',
        subLabel: 'Take as per your own requirement ',
        href: '#',
      },
      {
        label: 'Enterprise Application',
        subLabel: 'Everythings things on demand configuration tool',
        href: '#',
      },
    ],
  },
  {
    label: 'Decentralize',
    children: [
      {
        label: 'Blockchain Development',
        subLabel: 'Make own Public & Private  ',
        href: '/Blockchain',
      },
      {
        label: 'Dapps',
        subLabel: 'Design and Development',
        href: '/blockchain',
      },
      {
        label: 'Smart Contract ',
        subLabel: 'Development with your concept',
        href: '/blockchian',
      },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
  },
  {
    label: 'Who I am ',
    href: '/about',
  },
];
