import { MyInfo } from '@/typings';

import { client as sanityClient } from '../../../sanity/lib/client';
import { ErrorHandler } from '../error-handler';
import { GET_MY_INFO } from '../queries';

async function getMyInfo() {
  const myInfo: MyInfo = await sanityClient.fetch(GET_MY_INFO);

  return Response.json({ myInfo }, { status: 200 });
}

export const GET = ErrorHandler(getMyInfo);
