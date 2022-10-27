import { SystemStyleObject, useColorModeValue } from '@chakra-ui/react';

export const socialSX=():SystemStyleObject => {
    return  {
        bg:useColorModeValue('blackAlpha.100', 'whiteAlpha.100'),
        rounded:'full',
        w:8,
        h:8,
        cursor:'pointer',
        display:'inline-flex',
        alignItems:'center',
        justifyContent:'center',
        transition:'background 0.3s ease',
        _hover:{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        },
    }
};

export const containerSX=():SystemStyleObject => {
    return  {
        maxW:'6xl',
        py:4,
        direction:{ base: 'column', md: 'row' },
        justify:{ base: 'center', md: 'space-between' },
        //align:{base: 'center', md: 'center' }
    }
};