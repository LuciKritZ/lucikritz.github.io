import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'JobTitle',
      type: 'string',
    }),
    defineField({
      name: 'companyLink',
      title: 'CompanyLink',
      type: 'url',
    }),
    defineField({
      name: 'companyImage',
      title: 'CompanyImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'startDate',
      title: 'StartDate',
      type: 'date',
      options: {
        dateFormat: 'MM/DD/YYYY',
      },
    }),
    defineField({
      name: 'endDate',
      title: 'endDate',
      type: 'date',
      options: {
        dateFormat: 'MM/DD/YYYY',
      },
    }),
    defineField({
      name: 'isCurrent',
      title: 'IsCurrent',
      type: 'boolean',
    }),
    defineField({
      name: 'isRemote',
      title: 'IsRemote',
      type: 'boolean',
    }),
    defineField({
      name: 'techTags',
      title: 'TechTags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'skill',
          },
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
  ],
});
