import { Testimonial } from '@/typings';

import TestimonialCard from '../_components/cards/testimonial.card';
import ProjectsBackground from '../_components/projects-background';
import SectionContainer from '../_components/section/container.section';
import SectionHeader from '../_components/section/header.section';

type TestimonialsProps = {
  testimonials: Testimonial[];
};

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <SectionContainer className='flex overflow-hidden flex-col text-left md:flex-row justify-evenly mx-auto items-center z-0'>
      <SectionHeader>Testimonials</SectionHeader>

      <div className='relative w-full flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory z-20 mt-[18vh] space-x-[2vh] custom-scrollbar justify-start pb-[10vh]'>
        {[...testimonials].map((testimonial) => (
          <TestimonialCard key={testimonial._id} testimonial={testimonial} />
        ))}
      </div>

      <ProjectsBackground />
    </SectionContainer>
  );
};

export default Testimonials;
