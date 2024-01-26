import { Testimonial } from '@/typings';

import { client as sanityClient } from '../../../sanity/lib/client';
import { ErrorHandler } from '../error-handler';
import { GET_TESTIMONIALS } from '../queries';

async function getTestimonials() {
  const testimonials: Testimonial[] = await sanityClient.fetch(
    GET_TESTIMONIALS
  );

  return Response.json({ testimonials }, { status: 200 });
}

export const GET = ErrorHandler(getTestimonials);
