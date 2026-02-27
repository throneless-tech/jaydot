import { GlobalConfig } from 'payload'

export const Nav: GlobalConfig = {
  slug: 'nav',
  fields: [
    {
      name: 'items',
      type: 'array',
      required: true,
      maxRows: 8,
      fields: [
        {
          name: 'title',
          type: 'text',
          // type: 'relationship',
          // relationTo: 'pages',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        }
      ],
    },
    {
      name: 'standout-link',
      type: 'group',
      fields: [
        {
          name: 'standout-link-name',
          type: 'text',
        },
        {
          name: 'standout-link-url',
          type: 'text',
        }
      ]
    },
    {
      name: 'social-media',
      type: 'group',
      fields: [
        {
          name: 'instagram-handle',
          type: 'text'
        }
      ]
    }
  ],
}