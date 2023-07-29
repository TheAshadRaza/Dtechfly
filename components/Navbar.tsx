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
                <Image src='https://lh3.googleusercontent.com/pw/AIL4fc-DpnatBogPoKT3RZKfk-3j78398wEmUaqbbGFkrvbHYW2btHt05nvcHgWbFikTVebOYuwQk-H5alinixH1x8wmscdon4Th84KYfoasyPxnASy_MZYhxIwvkb8-vXPVsGN1BAxd1HuheiX7JZo2YesTcK9OUq38V6BACDRA04PgUX1CWqhS4XUCwwos1rYmIKONGlzOp1EalsEKdUW2IYQY1NhcCBt22IqJE7DY97oCOKDR4ueEUYn_4QhzHhGOliIcyQE3hV3HoplBABvk8ky38Jj96nf5Vc4g133ef9BFmLhB-CXkJNLlAYkMl_9ZLKTvKzWcpRb77lbkBcdD0IrWwYMo9tQJ20Qe2PZvBhK3s-COWcBQThhH7zznhkHKavX5QwWgAi6wlYagrTTyzXNFI69QJNtEC9SzaWwhZBJM7YtairK4QXbJHty7zAicixnT49tpOmqZk2GPGhMKB7on8g4K5CXiGBt8riQI7IeStpl9GxJIfgPu3zzHxLp_DABtWZ9RCikmTOhfJ36MqKLGVfiORF4_EW88zmYuAYsNVQjJkr-5Qm171a3lPnm6hNV03GhngEvzNK1IQhTFqWt188s8UKvWGq9zp5b-GcNdc2vsCyIVXWdR8pnqi5jutiQwyfeDhu20bdnoIdntlA_9Nsi_Oz4gO6ojDaBtmDi9V40QOgjEll8EEpUc2n9CmBtyVagoPpnfNQEG7M6t4GNRV_1dwywnprXX8dekKpina_dAgMbtIruEz2vDe5R_EnRTrUxjmZUzbCBuSs2KOKSe81JPP2l7saclpS2xHI1E3yvL5f9NEQPBFv42TYHLHSBTHd0-hB6hO2dGuAGa9yhKwndhRv7jKxjY46wb3TQurnFNVy7_LTRDrXJjddfG_Dr2JvulOFAzu6-9Bo43RA=w500-h500-s-no?authuser=0' alt='logo' width={'170px'} 
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
