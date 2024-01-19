'use client';

import { motion } from 'framer-motion';

export default function BackgroundDesign() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.8, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{
        duration: 2,
      }}
      className='relative flex justify-center items-center mt-48'
    >
      <div className='absolute border bg-[#e17e7e]/20 border-[#e7e7e7]/80 rounded-full h-[200px] w-[200px] mt-52 animate-ping blur-3xl duration-500' />
      <div className='mobile-sm:hidden absolute border border-[#e7e7e7]/10 rounded-lg h-[300px] w-[300px] mt-52' />
      <div className='mobile-sm:hidden absolute border border-[#e7e7e7]/10 rounded-lg h-[500px] w-[500px] mt-52' />
      <div className='mobile-sm:hidden absolute border border-[#e17e7e]/80 rounded-lg h-[650px] w-[650px] mt-52 animate-pulse' />
      <div className='mobile-sm:hidden absolute border border-[#e7e7e7]/20 rounded-lg h-[800px] w-[800px] mt-52' />
    </motion.div>
  );
}
