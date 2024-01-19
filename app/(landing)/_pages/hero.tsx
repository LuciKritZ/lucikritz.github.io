'use client';

import Link from 'next/link';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

import { NAV_BTN_OPTIONS } from '@/constants/nav.constants';
import { MyInfo } from '@/typings';
import { cn } from '@/utils/cn';
import { poorStory } from '@/utils/fonts';

import BackgroundDesign from '../_components/background-design';
import HeroImage from '../_components/hero-image';

type HeroProps = {
  info: MyInfo;
  image: string;
};

export default function Hero({ info, image = '' }: HeroProps) {
  const { name } = info;
  const [text, count] = useTypewriter({
    words: ['Krishal', '<LuciKritZ />', 'Coffee <3'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundDesign />
      <HeroImage name={name} image={image} />
      <div className='z-20'>
        <h2
          className={cn(
            'mobile-sm:text-sm text-lg md:text-xl uppercase text-gray-400 pb-5 tracking-[12px]',
            poorStory.className
          )}
        >
          Full Stack Software Engineer
        </h2>
        <h1 className='mobile-sm:text-2xl text-3xl md:text-5xl lg:text-6xl font-semibold px-10'>
          <span>{text}</span>
          <Cursor cursorColor='#e17e7e' />
        </h1>
        <div className='mobile-sm:pt-3 pt-5'>
          {NAV_BTN_OPTIONS.map(({ id, name }) => (
            <Link key={id} href={id}>
              <button className={cn('hero-nav-btn', poorStory.className)}>
                {name}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
