import { ReactNode,FC } from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  HStack
} from '@chakra-ui/react';
import Image from 'next/image'
import dark from "../../assets/dark-mode.svg"
import light from "../../assets/light-mode.svg"
import { Setting } from './settings';

const Links = [
                {title:"Home",url:"/"},
                {title:"Games",url:"/games"},
                {title:"Integrations",url:"/integrations"},
                {title:"Github",url:"https://github.com/x-eight"},
              ];

const NavLink = ({ children,url }: { children: ReactNode,url:string }) => (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={url} isExternal={children==="Github"?true:false}>
      {children}
    </Link>
);


export const Header:FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.title} url={link.url}>{link.title}</NavLink>
              ))}
            </HStack>
          </HStack>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <Image src={dark} alt="light" layout="fill" /> : <Image src={light} alt="dark" layout="fill" />}
              </Button>
              <Setting/>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
