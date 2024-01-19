import { type SchemaTypeDefinition } from 'sanity';
import { experience, myInfo, project, skill, social } from './schemas';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [experience, myInfo, project, social, skill],
};
