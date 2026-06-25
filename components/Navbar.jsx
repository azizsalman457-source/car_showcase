import React from 'react'
import Link from "next/link";
import Image from 'next/image';

import CustomButton from './CustomButton';

export default function Navbar() {
  return (
    <header 
    className='w-full absolute z-10'
    >
        <nav className='max-w-[1440px] mx-auto
        flex justify-between items-center
        sm:px-24 px-10 py-4'>
            <Link href="/" className='flex justify-center
             items-center'>
                <Image
                src="/logo.svg"
                alt='car hub logo'
                width={150}
                height={25}
                className='object-contain '
                />
             </Link>
             <CustomButton 
             title="Sign In"
             btnType="primary"
             containerStyles="text-primary-blue
             rounded-full bg-white min-w-[100px]"
             />
        </nav>

    </header>
    
  )
}
