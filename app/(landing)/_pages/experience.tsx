import { Experience } from '@/typings';

import ExperienceCard from '../_components/cards/experience.card';
import SectionContainer from '../_components/section/container.section';
import SectionHeader from '../_components/section/header.section';

type ExperienceProps = {
  experiences: Experience[];
};

const Experience = ({ experiences }: ExperienceProps) => {
  return (
    <SectionContainer className='relative overflow-hidden flex-col text-left md:flex-row px-10 mx-auto items-center justify-center'>
      <SectionHeader>Experience</SectionHeader>
      <div className='w-full flex space-x-5 overflow-x-auto p-6 sm:p-10 snap-x snap-mandatory mt-40 sm:mt-44 custom-scrollbar overflow-y-hidden mobile-sm:space-x-2 mobile-sm:p-0 mobile-sm:pb-2'>
        {[...experiences].map((experience) => (
          <ExperienceCard experience={experience} key={experience._id} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Experience;
