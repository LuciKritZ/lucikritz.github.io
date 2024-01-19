import {
  fetchExperiences,
  fetchMyInfo,
  fetchProjects,
  fetchSkills,
  fetchSocials,
} from '@/rest';
import { generateImageUrl } from '@/sanity/lib/image';
import { CombinedTypingsForLandingPage as LandingPageProps } from '@/typings';

export const getLandingPageData = async (): Promise<LandingPageProps> => {
  const myInfo: LandingPageProps['myInfo'] = await fetchMyInfo();
  const experiences: LandingPageProps['experiences'] = await fetchExperiences();
  const projects: LandingPageProps['projects'] = await fetchProjects();
  const skills: LandingPageProps['skills'] = await fetchSkills();
  const socials: LandingPageProps['socials'] = await fetchSocials();

  return {
    myInfo: { ...myInfo, heroImageURL: generateImageUrl(myInfo.heroImage) },
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
