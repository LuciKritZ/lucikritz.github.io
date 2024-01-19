import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'myInfo',
  title: 'MyInfo',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'designation',
      title: 'Designation',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'HeroImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'resumeLink',
      title: 'ResumeLink',
      type: 'url',
    }),
    defineField({
      name: 'aboutMe',
      title: 'AboutMe',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'social',
          },
        },
      ],
    }),
  ],
});
