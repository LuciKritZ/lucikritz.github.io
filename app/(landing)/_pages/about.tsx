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

      <div className='max-h-[70vh] text-[2.25vh] overflow-hidden flex flex-col justify-between md:tracking-wider z-20 overflow-y-scroll py-[3vh] mt-[10vh]'>
        <div className='flex justify-start'>
          <PortableTextParser blocks={description} />
        </div>
        <div className='flex flex-wrap gap-[1vh] overflow-y-auto mt-[4vh]'>
          {skills.map(({ _id, title }) => (
            <Chip key={_id} className='text-[2vh]'>
              {title}
            </Chip>
          ))}
        </div>
      </div>
      <div className='absolute bottom-0 left-0 h-[30vh] w-[30vh] blur-3xl z-10 rounded-full bg-[#e17e7e]/20' />
    </SectionContainer>
  );
};

export default About;
