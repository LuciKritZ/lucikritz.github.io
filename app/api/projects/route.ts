import type { NextRequest } from 'next/server';
import { client as sanityClient } from '../../../sanity/lib/client';
import { Project } from '@/typings';
import { GET_PROJECTS } from '../queries';

export async function GET(_req: NextRequest) {
  const projects: Project[] = await sanityClient.fetch(GET_PROJECTS);

  return Response.json({ projects }, { status: 200 });
}
