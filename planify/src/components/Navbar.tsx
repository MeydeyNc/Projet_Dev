import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { HandMetal } from 'lucide-react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import UserAccountnav from './UserAccountnav';
import { User } from "lucide-react";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className=' bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0'>
      <div className='container flex items-center justify-between'>
        <Link href='/'>
          <HandMetal />
        </Link>
        <h1 className="text-2xl flex justify-center">Planify</h1>
        <Link className={buttonVariants()} href='/admin'>
          Admin Dashboard
        </Link>
        {/* <h2>Client Session</h2> */}
        <User />
        {/* <h2>Server Session</h2> */}
        <p>Hello </p>
        {JSON.stringify(session?.user.username)}
        {session?.user ? (
          <UserAccountnav />
        ) : (
          <Link className={buttonVariants()} href='/sign-in'>
            Sign in
          </Link>
        )}

      </div>
    </div>
  );
};

export default Navbar;
