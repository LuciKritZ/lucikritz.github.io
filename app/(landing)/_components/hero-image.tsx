'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type HeroImageProps = {
  image: string;
  name: string;
};

const HeroImage = ({ image, name }: HeroImageProps) => {
  return (
    <motion.div
      initial={{ rotate: 0, opacity: 0, scale: 1.5 }}
      animate={{
        scale: [3, 3, 3, 2, 3, 1],
        opacity: 1,
        animation: 'ease-in-out',
      }}
      className='relative rounded-full w-[20vh] h-[20vh] mx-auto overflow-hidden'
    >
      <Image
        className='fixed object-fill'
        priority
        src={image}
        alt={name}
        fill
      />
    </motion.div>
  );
};

export default HeroImage;
