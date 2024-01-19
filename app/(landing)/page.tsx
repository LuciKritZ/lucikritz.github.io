import { CombinedTypingsForLandingPage as LandingPageProps } from '@/typings';
import {
  fetchExperiences,
  fetchMyInfo,
  fetchProjects,
  fetchSkills,
  fetchSocials,
} from '@/rest';
import ConditionalRendering from '@/components/conditional-rendering';
import NavBar from './_components/navbar';
import Hero from './_pages/hero';
import { generateImageUrl } from '@/sanity/lib/image';
import About from './_pages/about';
import Experience from './_pages/experience';
import Projects from './_pages/projects';
import ContactMe from './_pages/contact-me';

const getLandingPageData = async (): Promise<LandingPageProps> => {
  const myInfo: LandingPageProps['myInfo'] = await fetchMyInfo();
  const experiences: LandingPageProps['experiences'] = await fetchExperiences();
  const projects: LandingPageProps['projects'] = await fetchProjects();
  const skills: LandingPageProps['skills'] = await fetchSkills();
  const socials: LandingPageProps['socials'] = await fetchSocials();

  return {
    myInfo,
    experiences: experiences.map((experience) => ({
      ...experience,
      companyImageUrl: generateImageUrl(experience.companyImage),
    })),
    projects: projects.map((project) => ({
      ...project,
      imageUrl: generateImageUrl(project.image),
      techTags: project.techTags.map((techTag) => ({
        ...techTag,
        imageUrl: generateImageUrl(techTag.image),
      })),
    })),
    skills: skills.map((skill) => ({
      ...skill,
      imageUrl: generateImageUrl(skill.image),
    })),
    socials,
  };
};

/**
 * @see https://github.com/vercel/next.js/issues/49578
 */
export const runtime = 'edge';

export default async function LandingPage() {
  // @see https://react.dev/reference/react/use
  const landingPageData = await getLandingPageData();
  const { myInfo, experiences, projects, skills, socials } = landingPageData;

  return (
    <ConditionalRendering
      condition={!!landingPageData}
      render={
        <div className='bg-[#191919] text-[#e7e7e7] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 custom-scrollbar'>
          <NavBar socials={socials} />

          <main>
            <section id='hero' className='snap-center'>
              <Hero image={generateImageUrl(myInfo.heroImage)} info={myInfo} />
            </section>

            <section id='about' className='snap-center'>
              <About description={myInfo.aboutMe} skills={skills} />
            </section>

            <section id='experience' className='snap-center'>
              <Experience experiences={experiences} />
            </section>

            <section id='projects' className='snap-center'>
              <Projects projects={projects} />
            </section>

            <section id='contact' className='snap-start'>
              <ContactMe
                email={myInfo.email}
                phone={myInfo.phone}
                socials={socials}
              />
            </section>
          </main>
        </div>
      }
    />
  );
}
