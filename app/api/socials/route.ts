import type { NextRequest } from 'next/server';
import { client as sanityClient } from '../../../sanity/lib/client';
import { Social } from '@/typings';
import { GET_SOCIALS } from '../queries';

export async function GET(_req: NextRequest) {
  const socials: Social[] = await sanityClient.fetch(GET_SOCIALS);

  return Response.json({ socials }, { status: 200 });
}
