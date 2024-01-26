import Image from 'next/image';
import Link from 'next/link';

import PortableTextParser from '@/components/portable-text-parser';
import { Project } from '@/typings';

type ProjectCardProps = {
  project: Project;
  currentProjectNumber: number;
  totalNumberOfProjects: number;
};

const ProjectCard = ({
  project: { _id, imageUrl, title, summary, link },
  currentProjectNumber,
  totalNumberOfProjects,
}: ProjectCardProps) => {
  return (
    <div
      key={_id}
      className='flex-shrink-0 snap-center flex flex-col space-y-[2vh] items-center justify-start bg-[#e7e7e7]/10 overflow-hidden rounded-lg w-[60vw] h-[60vh] max-w-[500px]'
    >
      <Link target='_blank' href={link} className='w-full'>
        <div className='h-[30vh] relative flex justify-center items-center w-full hover:grayscale'>
          <Image
            priority
            src={imageUrl ?? ''}
            height={500}
            width={500}
            alt={title}
            className='rounded-md h-[30vh] w-full object-fill'
          />
        </div>
      </Link>

      <div className='px-[4vw] py-[4vh] pt-[1vh] h-full relative z-20 overflow-y-scroll flex flex-col justify-center items-center'>
        <div className='absolute blur-3xl z-0 rounded-full h-[12vh] w-[12vh] bg-[#e17e7e] bottom-0 right-0' />
        <h4 className='text-[4vh] font-semibold text-center pb-[1vh] z-2'>
          <span className='underline decoration-solid decoration-[1px] decoration-[#e17e7e]'>
            #{currentProjectNumber} of {totalNumberOfProjects}
          </span>
          : {title}
        </h4>

        {summary && (
          <span className='w-full text-[2vh] text-center md:text-center overflow-y-auto max-h-[25vh]'>
            <PortableTextParser blocks={summary} />
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
