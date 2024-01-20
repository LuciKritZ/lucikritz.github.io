'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import Chip from '@/components/chip';
import PortableTextParser from '@/components/portable-text-parser';
import { Experience } from '@/typings';
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
    <article className='flex flex-col rounded-lg items-center space-y-[1vh] flex-shrink-0 max-w-[820px] w-[75vw] snap-center bg-[#e7e7e7]/10 p-[2vh] relative overflow-y-scroll max-h-[60vh]'>
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

      <div className='z-[11]'>
        <h4 className='text-[3vh] tracking-normal font-light'>{jobTitle}</h4>
        <Link href={companyLink} target='_blank'>
          <p className='text-[3vh] font-bold mt-[1vh]'>{`${company}${
            isRemote ? ', Remote' : ''
          }`}</p>
        </Link>

        <p className='uppercase py-[1vh] text-gray-300'>
          {formatDateForExperience(startDate)} —{' '}
          {isCurrent ? 'Current' : formatDateForExperience(endDate)}
        </p>

        <div className='flex flex-wrap gap-[0.75vh] overflow-y-auto'>
          {techTags.map(({ _id, title }) => (
            <Chip key={_id} className='text-[2vh]'>
              {title}
            </Chip>
          ))}
        </div>

        <div className='flex flex-col overflow-y-auto text-[3vh] mt-[2vh]'>
          <PortableTextParser blocks={description} />
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;
