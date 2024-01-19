import type { NextRequest } from 'next/server';
import { client as sanityClient } from '../../../sanity/lib/client';
import { MyInfo } from '@/typings';
import { GET_MY_INFO } from '../queries';

export async function GET(_req: NextRequest) {
  const myInfo: MyInfo = await sanityClient.fetch(GET_MY_INFO);

  return Response.json({ myInfo }, { status: 200 });
}
