import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FC } from 'react';
import { SocialButton } from './button';
  
export const Footer:FC = () =>  {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ md: 'space-between' }}
            align={{ md: 'center' }}>
            <Text>© 2022 x-eight. All rights reserved</Text>
            <Stack direction={'row'} spacing={8}>
                <SocialButton label={'Twitter'} href={'https://www.facebook.com'}>
                    <FaTwitter />
                </SocialButton>
                <SocialButton label={'YouTube'} href={'https://www.youtube.com'}>
                    <FaYoutube />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'https://www.linkedin.com/'}>
                    <FaInstagram />
                </SocialButton>
            </Stack>
        </Container>
        </Box>
    );
}
