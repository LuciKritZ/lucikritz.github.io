import NavBar from './_components/navbar';
import About from './_pages/about';
import ContactMe from './_pages/contact-me';
import Experience from './_pages/experience';
import Hero from './_pages/hero';
import Projects from './_pages/projects';
import { getLandingPageData } from './_rest';

/**
 * @see https://github.com/vercel/next.js/discussions/58936#discussioncomment-7701179
 */
export const dynamic = 'force-dynamic';

const LandingPage = async () => {
  const landingPageData = await getLandingPageData();
  const { myInfo, experiences, projects, skills, socials } = landingPageData;

  return (
    <div className='bg-[#191919] text-[#e7e7e7] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 custom-scrollbar'>
      <NavBar socials={socials} />

      <main>
        <section id='hero' className='snap-center'>
          <Hero
            image={landingPageData.myInfo.heroImageURL ?? ''}
            info={myInfo}
          />
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
  );
};

export default LandingPage;
