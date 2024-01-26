import { UrlRule, defineField, defineType } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'by',
      title: 'By',
      description: 'Name of the client',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      description: 'Link to the client',
      type: 'url',
      validation: (Rule: UrlRule) =>
        Rule.uri({
          scheme: ['https'],
        }),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
  ],
});
