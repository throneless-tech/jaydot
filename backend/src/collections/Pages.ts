import type { CollectionConfig } from 'payload'
import { title } from 'process'

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
  ],
}
