import { Social } from '@/typings';

import { client as sanityClient } from '../../../sanity/lib/client';
import { ErrorHandler } from '../error-handler';
import { GET_SOCIALS } from '../queries';

async function getSocials() {
  const socials: Social[] = await sanityClient.fetch(GET_SOCIALS);

  return Response.json({ socials }, { status: 200 });
}

export const GET = ErrorHandler(getSocials);
