import type { Block, CollectionConfig } from 'payload'
import { title } from 'process'
import { text } from 'stream/consumers'

const regex = /\s/

const TextBlock: Block = {
  slug: 'Text editor',
  imageURL: '/images/textblock.png',
  imageAltText: 'A screenshot of what text in a text editor can look like on the website.',
  fields: [
    {
      name: 'text',
      type: 'richText',
      required: true,
    },
  ],
}

const ValuesBlock: Block = {
  slug: 'Values section',
  imageURL: '/images/values.png',
  imageAltText: 'A screenshot of what the values section can look like on the website.',
  fields: [
    {
      name: 'values',
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
  ]
}

const ApproachesBlock: Block = {
  slug: 'Approaches section',
  imageURL: '/images/approaches.png',
  imageAltText: 'A screenshot of what the approaches section can look like on the website.',
  fields: [
    {
      name: 'approaches',
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
      ]
    },
  ]
}

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
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: "The URL, or slug, of this page. For instance, 'title' or 'page-title'. May not contain whitespace."
      },
      // TODO add validation
    },
    {
      name: 'sections',
      type: 'blocks', 
      blocks: [
        TextBlock,
        ValuesBlock,
        ApproachesBlock,
      ],
    },
    

  ],
}
