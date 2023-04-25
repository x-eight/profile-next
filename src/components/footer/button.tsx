import { VisuallyHidden,Link } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { SocialSX } from './footer.sx';

  export const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
      <Link sx={{...SocialSX()}} href={href} isExternal>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </Link>
    );
};
