import type { CollectionAfterChangeHook } from 'payload'
import type { FormSubmission } from '@/payload-types'

export const afterChangeHook: CollectionAfterChangeHook<FormSubmission> = async ({
  doc,
  operation,
  req
}) => {
  if (operation === 'create') {
  console.log('Form submission received. Generating email...');
    
  await req.payload
    .sendEmail({
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_RECIPIENT,
      subject: `A new form submission on the Jaydot website from ${doc?.name}`,
      html: `<p>Here is the message:</p><p>Name: ${doc?.name || 'Not provided'}</p><p>Email: ${doc?.email || 'Not provided'}</p><p>Phone number: ${doc?.phone || 'Not provided'}</p><p>Message:</p><p>${doc?.message}</p>`,
    })
  }

  return doc;
}