'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

import { Social } from '@/typings';

type NavBarProps = {
  socials: Social[];
};

export default function NavBar({ socials }: NavBarProps) {
  return (
    <header className='sticky top-0 flex flex-row justify-between max-w-7xl mx-auto z-40 xl:items-center p-5 h-[12vh]'>
      <div className='flex flex-row items-center'>
        {socials.map(({ _id, link, title }, index) => (
          <motion.div
            initial={{ x: -500, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1 + (index + 1) * 0.05 }}
            key={_id}
          >
            <SocialIcon
              href={link}
              target='_blank'
              network={title.toLowerCase().trim()}
              fgColor='#e7e7e7'
              bgColor='transparent'
              className='cursor-pointer'
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className='flex flex-row items-center cursor-pointer text-gray-300'
      >
        <SocialIcon
          href='#contact'
          network='email'
          fgColor='#e7e7e7'
          bgColor='transparent'
          className='cursor-pointer'
        />
        <Link href='#contact'>
          <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
            Let&apos;s chat!
          </p>
        </Link>
      </motion.div>
    </header>
  );
}
