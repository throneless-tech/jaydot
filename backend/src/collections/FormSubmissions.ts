import type { CollectionConfig } from 'payload'
import { anyone } from './access/anyone'
import { beforeValidateHook } from './hooks/checkFormSubmission'

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
    beforeValidate: [beforeValidateHook],
  //   afterChange: [
  //     async ({ doc, operation, req }) => {
  //       if (operation === 'create') {
  //         req.payload
  //           .sendEmail({
  //             from: process.env.SMTP_USER,
  //             to: process.env.EMAIL_RECIPIENT,
  //             subject: `A new form submission on the Jaydot website from ${doc?.name}`,
  //             html: `<p>Here is the message:</p><p>Name: ${doc?.name || 'Not provided'}</p><p>Email: ${doc?.email || 'Not provided'}</p><p>Phone number: ${doc?.phone || 'Not provided'}</p><p>Message:</p><p>${doc?.message}</p>`,
  //           })
  //       }
  //     }
  //   ]
  }
}