import { GlobalConfig } from 'payload'

export const Team: GlobalConfig = {
  slug: 'team',
  access: {
    read: () => true,
    update: ({ req: { user }, data }) => {
      return Boolean(user)
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Our team'
    },
    {
      name: 'subtitle',
      type: 'textarea',
      required: true,
      defaultValue: ''
    },
    {
      name: 'teamPhoto',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'people',
      type: 'array',
      admin: {
        components: {
          RowLabel: "@/components/arrayRowLabel",
        },
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'pronouns',
          type: 'text',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'bio',
          type: 'textarea',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        }
      ],
    },
    {
      name: 'consultants',
      type: 'array',
      admin: {
        components: {
          RowLabel: "@/components/arrayRowLabel",
        },
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'pronouns',
          type: 'text',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'bio',
          type: 'textarea',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        }
      ],
    },
  ],
}