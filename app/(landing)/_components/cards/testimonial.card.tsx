import Link from 'next/link';

import PortableTextParser from '@/components/portable-text-parser';
import { Testimonial } from '@/typings';

type TestimonialCardProps = {
  testimonial: Testimonial;
};

const TestimonialCard = ({
  testimonial: { link, by, content },
}: TestimonialCardProps) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-[1vh] flex-shrink-0 max-w-[820px] w-[75vw] snap-center bg-[#e7e7e7]/10 p-[2vh] relative overflow-hidden max-h-[60vh]'>
      <div className='flex border border-[#e17e7e]/80 p-[1vh] rounded-lg absolute inset-2 animate-pulse'></div>
      <div className='z-[11] flex flex-col overflow-hidden'>
        <Link href={link} target='_blank'>
          <p className='text-[4vh] font-bold mt-[1vh] highlight-text'>{by}</p>
        </Link>

        <div className='flex flex-col text-[2vh] mt-[2vh] overflow-y-scroll'>
          <PortableTextParser blocks={content} />
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
