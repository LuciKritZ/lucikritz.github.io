import { UrlRule, defineField, defineType } from 'sanity';

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Platform type',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (Rule: UrlRule) =>
        Rule.uri({
          scheme: ['https', 'mailto', 'tel'],
        }),
    }),
  ],
});
