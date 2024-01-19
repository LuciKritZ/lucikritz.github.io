import type { NextRequest } from 'next/server';
import { client as sanityClient } from '../../../sanity/lib/client';
import { Experience } from '@/typings';
import { GET_EXPERIENCES } from '../queries';

export async function GET(_req: NextRequest) {
  const experiences: Experience[] = await sanityClient.fetch(GET_EXPERIENCES);

  return Response.json({ experiences }, { status: 200 });
}
