import createImageUrlBuilder from '@sanity/image-url';

import { GenerateUrlBuilder } from '@/typings';

import { dataset, projectId } from '../env';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
});

export const generateImageUrl = ({ source, size }: GenerateUrlBuilder) => {
  if (size) {
    const { width, height } = size;
    return imageBuilder
      ?.image(source)
      .size(width, height)
      .format('png')
      .url()
      .toString();
  }

  return imageBuilder?.image(source).auto('format').fit('max').url();
};
