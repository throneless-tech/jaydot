import type { CollectionConfig } from 'payload'
import { title } from 'process'
import { text } from 'stream/consumers'

const regex = /\s/

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'url',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: "The URL, or slug, of this page. For instance, 'title' or 'page-title'. May not contain whitespace."
      },
      // TODO add validation
    },
    {
      name: 'history',
      label: 'Our History',
      type: 'richText',
    },
    {
      name: 'mission',
      label: 'Our Mission',
      type: 'textarea'
    },
    {
      name: 'values',
      label: 'Our Values',
      type: 'array',
      admin: {
        components: {
          RowLabel: "@/components/arrayRowLabel",
        },
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ]
    },

  ],
}
