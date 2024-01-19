import { Experience } from '@/typings';

import { client as sanityClient } from '../../../sanity/lib/client';
import { ErrorHandler } from '../error-handler';
import { GET_EXPERIENCES } from '../queries';

async function getExperiences() {
  const experiences: Experience[] = await sanityClient.fetch(GET_EXPERIENCES);

  return Response.json({ experiences }, { status: 200 });
}

export const GET = ErrorHandler(getExperiences);
