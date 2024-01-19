import { groq } from 'next-sanity';

export const GET_EXPERIENCES = groq`
  *[_type == "experience"] | order(startDate desc) {
    ...,
    techTags[]->
  }
`;

export const GET_MY_INFO = groq`
  *[_type == "myInfo"][0] {
    ...,
    socials[]->
  }
`;

export const GET_PROJECTS = groq`
  *[_type == "project"] {
    ...,
    techTags[]->
  }
`;

export const GET_SKILLS = groq`
  *[_type == "skill"] | order(_createdAt asc) {
    ...,
  }
`;

export const GET_SOCIALS = groq`
  *[_type == "social"] {
    ...,
  }
`;
