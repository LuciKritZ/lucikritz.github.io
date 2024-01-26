import { ReactElement, ReactNode } from 'react';

import type { Image } from 'sanity';

export type FCVanillaProviderType = {
  children: ReactNode;
};

export type GenericReactElement = string | ReactNode | ReactElement;

interface SanityCommonStructure {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

export interface SanityImageStructure extends Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface GenerateUrlBuilder {
  source: Image;
  size?: {
    width: number;
    height: number;
  };
}

interface SanityBlockChildrenStructure {
  _type: string;
  _key: string;
  marks: string[];
  text: string;
}

interface SanityBlockMarkDefStructure {
  _key: string;
  _type: string;
  href: string;
}

interface SanityBlockStructure {
  _type: 'block';
  _key: string;
  style: string;
  markDefs: SanityBlockMarkDefStructure[];
  children: SanityBlockChildrenStructure[];
}

export interface Social extends SanityCommonStructure {
  _type: 'social';
  title: string;
  link: string;
}

export interface Skill extends SanityCommonStructure {
  _type: 'skill';
  image: SanityImageStructure;
  efficiency: number;
  title: string;
  imageUrl?: string;
}

export interface Experience extends SanityCommonStructure {
  _type: 'experience';
  company: string;
  companyLink: string;
  startDate: date;
  endDate?: date;
  isCurrent: boolean;
  isRemote: boolean;
  description: SanityBlockStructure[];
  companyImage: SanityImageStructure;
  companyImageUrl?: string;
  cursorImageUrl?: string;
  jobTitle: string;
  techTags: Skill[];
}

export interface MyInfo extends SanityCommonStructure {
  _type: 'myInfo';
  email: string;
  name: string;
  designation: string;
  heroImage: SanityImageStructure;
  heroImageURL?: string;
  resumeLink: string;
  aboutMe: SanityBlockStructure[];
  phone: string;
  socials: Social[];
}

export interface Project extends SanityCommonStructure {
  _type: 'project';
  title: string;
  image: SanityImageStructure;
  link: string;
  summary: SanityBlockStructure[];
  techTags: Skill[];
  imageUrl?: string;
}

export interface CombinedTypingsForLandingPage {
  myInfo: MyInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}
