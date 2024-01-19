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
      className='mobile-sm:h-[36] mobile-sm:w-[36] relative rounded-full h-40 w-40 md:h-32 md:w-32 mx-auto'
    >
      <Image
        className='object-cover'
        priority
        src={image}
        alt={name}
        width={300}
        height={300}
      />
    </motion.div>
  );
};

export default HeroImage;
