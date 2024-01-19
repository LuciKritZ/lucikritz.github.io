import { Experience } from '@/typings';

import ExperienceCard from '../_components/cards/experience.card';
import SectionContainer from '../_components/section/container.section';
import SectionHeader from '../_components/section/header.section';

type ExperienceProps = {
  experiences: Experience[];
};

const Experience = ({ experiences }: ExperienceProps) => {
  return (
    <SectionContainer className='relative overflow-hidden flex-col text-left md:flex-row mx-auto items-center justify-center'>
      <SectionHeader>Experience</SectionHeader>
      <div className='w-full flex space-x-[2vh] overflow-x-auto p-[5vh] pb-[10vh] snap-x snap-mandatory mt-[18vh] custom-scrollbar overflow-y-hidden'>
        {[...experiences].map((experience) => (
          <ExperienceCard experience={experience} key={experience._id} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Experience;
