import type { NextRequest } from 'next/server';
import { client as sanityClient } from '../../../sanity/lib/client';
import { Skill } from '@/typings';
import { GET_SKILLS } from '../queries';

export async function GET(_req: NextRequest) {
  const skills: Skill[] = await sanityClient.fetch(GET_SKILLS);

  return Response.json({ skills }, { status: 200 });
}
