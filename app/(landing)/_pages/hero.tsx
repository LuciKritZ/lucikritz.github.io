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
    <div className='h-screen flex flex-col space-y-[1vh] items-center justify-center text-center overflow-hidden pb-[10vh]'>
      <BackgroundDesign />
      <HeroImage name={name} image={image} />
      <div className='z-20'>
        <h2
          className={cn(
            'text-[3vh] uppercase text-gray-400 pb-[4vh] tracking-[2vh]',
            poorStory.className
          )}
        >
          Full Stack Software Engineer
        </h2>
        <h1 className='text-[3vh] font-semibold px-[4vh]'>
          <span>{text}</span>
          <Cursor cursorColor='#e17e7e' />
        </h1>
        <div className='pt-[2vh]'>
          <Link href={info.resumeLink} target='_blank'>
            <button className={cn('hero-nav-btn', poorStory.className)}>
              Resume
            </button>
          </Link>
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
