import { Experience, MyInfo, Project, Skill, Social } from '@/typings';
import fetchQuery from '@/utils/fetch-query';

export const fetchSkills = async (): Promise<Skill[]> => {
  const skills = await fetchQuery<Skill[]>('skills');
  return skills;
};

export const fetchSocials = async (): Promise<Social[]> => {
  const socials = await fetchQuery<Social[]>('socials');
  return socials;
};

export const fetchMyInfo = async (): Promise<MyInfo> => {
  const myInfo = await fetchQuery<MyInfo>('my-info', 'myInfo');
  return myInfo;
};

export const fetchExperiences = async (): Promise<Experience[]> => {
  const experiences = await fetchQuery<Experience[]>('experiences');
  return experiences;
};

export const fetchProjects = async (): Promise<Project[]> => {
  const projects = await fetchQuery<Project[]>('projects');
  return projects;
};
