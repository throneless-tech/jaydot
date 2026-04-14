import { GlobalConfig } from 'payload'

export const Contact: GlobalConfig = {
  slug: 'contact',
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
      defaultValue: 'Contact us'
    },
    {
      name: 'subtitle',
      type: 'textarea',
      required: true,
      defaultValue: ''
    },
    {
      name: 'email',
      type: 'text',
      required: true,
      defaultValue: 'info@jaydot.org'
    },
    {
      name: 'hours',
      label: 'Business hours',
      type: 'text',
    },
    {
      name: 'social-media',
      type: 'group',
      fields: [
        {
          name: 'instagram-handle',
          type: 'text'
        },
        {
          name: 'linkedin-handle',
          type: 'text'
        },
        {
          name: 'threads-handle',
          type: 'text'
        }
      ]
    },
  ],
}