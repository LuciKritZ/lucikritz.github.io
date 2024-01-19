import { Project } from '@/typings';

import ProjectCard from '../_components/cards/project.card';
import ProjectsBackground from '../_components/projects-background';
import SectionContainer from '../_components/section/container.section';
import SectionHeader from '../_components/section/header.section';

type ProjectsProps = {
  projects: Project[];
};

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <SectionContainer className='flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <SectionHeader>Projects</SectionHeader>

      <div className='relative w-full flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory z-20 mt-44 space-x-5 sm:space-x-7 custom-scrollbar justify-evenly'>
        {[...projects].map((project, index) => (
          <ProjectCard
            key={project._id}
            project={project}
            currentProjectNumber={index + 1}
            totalNumberOfProjects={projects.length}
          />
        ))}
      </div>

      <ProjectsBackground />
    </SectionContainer>
  );
};

export default Projects;
