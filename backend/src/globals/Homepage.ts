import { GlobalConfig } from 'payload'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  access: {
    read: () => true,
    update: ({ req: { user }, data }) => {
      return Boolean(user)
    },
  },
  fields: [
    {
      name: 'stats',
      type: 'array',
      fields: [
        {
          name: 'amount',
          type: 'text',
          required: true,
        },
        {
          name: 'text',
          type: 'text',
          required: true,
        },
        {
          name: 'subtext',
          type: 'text',
          required: true,
        }
      ]
    },
    {
      name: 'whatWeDoCard',
      label: 'What we do',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'summary',
          type: 'textarea',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
        {
          name: 'icon',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'testimonials',
      type: 'array',
      fields: [
        {
          name: 'quote',
          type: 'textarea',
          required: true,
        },
        {
          name: 'attribution',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'cta',
      label: 'Call to action',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'linkName',
          type: 'text',
        },
        {
          name: 'linkUrl',
          type: 'text',
        },
        {
          name: 'icon',
          type: 'text',
        }
      ],
    },
    {
      name: 'partners',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
        }
      ]
    }
  ],
}