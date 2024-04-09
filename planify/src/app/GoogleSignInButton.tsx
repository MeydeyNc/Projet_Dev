import { FC, ReactNode } from 'react';
import { Button } from '/home/jancel/Projet_Dev/planify/src/app/components/ui/button';

interface GoogleSignInButtonProps {
  children: ReactNode;
}
const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  const loginWithGoogle = () => console.log('login with google');

  return (
    <Button onClick={loginWithGoogle} className='w-full'>
      {children}
    </Button>
  );
};

export default GoogleSignInButton;
