'use client';

import { Experience } from '@/typings';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PortableTextParser from '@/components/portable-text-parser';
import Chip from '@/components/chip';
import Link from 'next/link';
import { formatDateForExperience } from '@/utils/date';

type ExperienceCardProps = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const {
    companyImageUrl = '',
    company,
    jobTitle,
    description,
    techTags,
    startDate,
    endDate,
    isCurrent,
    isRemote,
    companyLink,
  } = experience;
  return (
    <article className='mobile-sm:w-[100%] mobile-sm:space-y-0 flex flex-col rounded-lg items-center space-y-4 sm:space-y-7 flex-shrink-0 w-[360px] sm:w-[436px] md:w-[600px] xl:w-[900px] snap-center bg-[#e7e7e7]/10 p-4 relative overflow-hidden'>
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: false }}
        className='absolute rounded-full inset-1 z-[10] blur-3xl grayscale'
      >
        <Image
          priority
          src={companyImageUrl}
          fill
          alt={company}
          className='object-center object-fill'
          unoptimized
        />
      </motion.div>

      <div className='mobile-sm:px-0 px-0 sm:px-6 md:px-10 z-[11]'>
        <h4 className='mobile-sm:text-[16px] mobile-sm:tracking-wide text-3xl sm:text-4xl font-light'>
          {jobTitle}
        </h4>
        <Link href={companyLink} target='_blank'>
          <p className='mobile-sm:text-[16px] font-bold text-xl sm:text-2xl mt-1'>{`${company}${
            isRemote ? ', Remote' : ''
          }`}</p>
        </Link>

        <p className='mobile-sm:text-[12px] uppercase mobile-sm:py-2 py-4 sm:py-5 text-gray-300'>
          {formatDateForExperience(startDate)} —{' '}
          {isCurrent ? 'Current' : formatDateForExperience(endDate)}
        </p>

        <div className='flex flex-wrap gap-4 mobile-sm:hidden overflow-y-auto'>
          {techTags.map(({ _id, title }) => (
            <Chip
              key={_id}
              className='text-[16px] sm:text-[20px] min-h-[20px] mobile-sm:text-[12px]'
            >
              {title}
            </Chip>
          ))}
        </div>

        <div className='mobile-sm:h-[300px] flex flex-col overflow-y-auto mobile-sm:text-[16px]'>
          <PortableTextParser blocks={description} />
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;
