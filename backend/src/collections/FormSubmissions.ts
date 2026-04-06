import type { CollectionConfig } from 'payload'
import { anyone } from './access/anyone'
import { afterChangeHook } from './hooks/checkFormSubmission'

export const FormSubmissions: CollectionConfig = {
  slug: 'formSubmissions',
    admin: {
    defaultColumns: ['name', 'email'],
  },
    access: {
    read: ({ req: { user }, data }) => {
      return Boolean(user)
    },
    create: anyone,
    update: () => false,
    delete: ({ req: { user }, data }) => {
      return Boolean(user)
    },
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'text',
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'message',
      type: 'textarea',
    }
  ],
  hooks: {
    afterChange: [afterChangeHook],
  }
}