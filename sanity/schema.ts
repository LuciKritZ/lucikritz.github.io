import { type SchemaTypeDefinition } from 'sanity';

import {
  experience,
  myInfo,
  project,
  skill,
  social,
  testimonial,
} from './schemas';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [experience, myInfo, project, social, skill, testimonial],
};
