'use client';

import Chip from '@/components/chip';
import PortableTextParser from '@/components/portable-text-parser';
import { MyInfo, Skill } from '@/typings';

import SectionContainer from '../_components/section/container.section';
import SectionHeader from '../_components/section/header.section';

type AboutProps = {
  description: MyInfo['aboutMe'];
  skills: Skill[];
};

const About = ({ description, skills }: AboutProps) => {
  return (
    <SectionContainer className='w-screen'>
      <SectionHeader>About</SectionHeader>

      <div className='text-[2vh] sm:text-[3vh] md:text-[24px] overflow-scroll flex flex-col justify-between md:tracking-wider z-20 mt-10'>
        <div className='flex justify-start'>
          <PortableTextParser blocks={description} />
        </div>
        <div className='flex flex-wrap mt-10 justify-center text-start overflow-y-auto xl:max-h-[30vh] max-h-[25vh] custom-scrollbar scrollbar-thin'>
          {skills.map(({ _id, title }) => (
            <Chip
              key={_id}
              className='text-[2vh] sm:text-[3vh] md:text-[24px] mx-2 my-2'
            >
              {title}
            </Chip>
          ))}
        </div>
      </div>
      <div className='absolute bottom-0 left-0 h-[300px] w-[300px] blur-3xl z-10 rounded-full bg-[#e17e7e]/20' />
    </SectionContainer>
  );
};

export default About;
