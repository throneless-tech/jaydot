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
    }
  ],
}