import { Project } from '@/typings';

import { client as sanityClient } from '../../../sanity/lib/client';
import { ErrorHandler } from '../error-handler';
import { GET_PROJECTS } from '../queries';

async function getProjects() {
  const projects: Project[] = await sanityClient.fetch(GET_PROJECTS);

  return Response.json({ projects }, { status: 200 });
}

export const GET = ErrorHandler(getProjects);
