import PortableTextParser from '@/components/portable-text-parser';
import { Project } from '@/typings';
import Image from 'next/image';
import Link from 'next/link';

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
      className='w-full flex-shrink-0 snap-center flex flex-col space-y-3 sm:space-y-5 items-center justify-center bg-[#e7e7e7]/10 overflow-hidden rounded-lg max-w-2xl'
    >
      <Link target='_blank' href={link} className='w-full'>
        <div className='relative mb-2 sm:mb-6 flex justify-center items-center sm:h-[300px] h-[200px] w-full hover:grayscale'>
          <Image
            priority
            src={imageUrl ?? ''}
            height={500}
            width={500}
            alt={title}
            className='h-[100%] rounded-md w-full'
          />
        </div>
      </Link>

      <div className='space-y-8 sm:space-y-10 px-4 py-6 md:px-10 max-w-7xl sm:max-w-6xl w-full relative z-20'>
        <div className='absolute blur-3xl z-0 rounded-full h-[100px] w-[100px] bg-[#e17e7e] bottom-0 right-0' />
        <h4 className='text-4xl font-semibold text-center pb-4 sm:pb-6 z-2'>
          <span className='underline decoration-solid decoration-[1px] decoration-[#e17e7e]'>
            #{currentProjectNumber} of {totalNumberOfProjects}
          </span>
          : {title}
        </h4>

        {summary && (
          <span className='w-full text-lg text-center md:text-center overflow-y-auto max-h-[25vh]'>
            <PortableTextParser blocks={summary} />
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
