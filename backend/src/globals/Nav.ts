import { GlobalConfig } from 'payload'

export const Nav: GlobalConfig = {
  slug: 'nav',
  label: 'Navigation and global data',
  access: {
    read: () => true,
    update: ({ req: { user }, data }) => {
      return Boolean(user)
    },
  },
  fields: [
    {
      name: 'SEOdescription',
      label: 'SEO Description',
      admin: {
        description: 'A sitewide description of the website, used as a fallback for SEO.'
      },
      type: 'textarea',
      required: true,
      defaultValue: ''
    },
    {
      name: 'items',
      label: 'Nav Menu Items',
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
    },
    {
      name: 'address',
      type: 'group',
      fields: [
        {
          name: 'line1',
          label: 'Line 1',
          type: 'text',
        },
        {
          name: 'line2',
          label: 'Line 2',
          type: 'text',
        },
      ]
    }
  ],
}