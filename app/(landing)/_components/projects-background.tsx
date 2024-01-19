'use client';

import { motion } from 'framer-motion';

const ProjectBackground = () => {
  return (
    <>
      <motion.div
        initial={{ x: -400, opacity: 0 }}
        transition={{
          duration: 1,
          staggerDirection: 1,
          staggerChildren: 0.2,
        }}
        whileInView={{
          x: -300,
          opacity: 1,
        }}
        className='absolute rounded-full top-0 bg-[#e17e7e]/5 right-0 h-[30vh] w-[30vh] z-[10] blur-3xl'
      />
      <motion.div
        initial={{ x: 400, opacity: 0 }}
        transition={{
          duration: 0.5,
          staggerDirection: 1,
          staggerChildren: 0.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        className='absolute rounded-full top-[20%] bg-[#e17e7e]/5 left-0 h-[25vh] w-[25vh] z-[10] blur-3xl'
      />
      <motion.div
        initial={{ x: -400, opacity: 0 }}
        transition={{
          duration: 1,
          staggerDirection: 1,
          staggerChildren: 0.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        className='absolute rounded-full top-[calc(50%)] bg-[#e17e7e]/5 right-0 h-[30vh] w-[30vh] z-[10] blur-3xl'
      />
      <motion.div
        initial={{ x: 400, opacity: 0 }}
        transition={{
          duration: 1.5,
          staggerDirection: 1,
          staggerChildren: 1,
        }}
        whileInView={{
          x: 300,
          opacity: 1,
        }}
        className='absolute rounded-full bottom-0 left-0 bg-[#e17e7e]/5 h-[35vh] w-[35vh] z-[10] blur-3xl'
      />
    </>
  );
};

export default ProjectBackground;
