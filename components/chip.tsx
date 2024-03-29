'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { GenericReactElement } from '@/typings';
import { cn } from '@/utils/cn';

type Props = {
  children: GenericReactElement;
  className?: string;
  image?: string;
};

const Chip = ({ children, className = '', image }: Props) => {
  return (
    <div
      className={cn(
        'bg-[#E17E7E]/20 rounded-full px-[2vh] flex-wrap flex text-[1vh] min-h-[4vh] items-center justify-between group cursor-default',
        className,
        !!image && 'pl-2 pr-4'
      )}
    >
      {!!image && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: 'spring',
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className='w-[32px] min-h-[32px] relative mr-1 rounded-full'
        >
          <Image src={image} alt='Technology' fill />
        </motion.div>
      )}
      {children}
    </div>
  );
};

export default Chip;
