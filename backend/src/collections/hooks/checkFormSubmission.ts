import type { CollectionBeforeValidateHook } from 'payload'
import type { FormSubmission } from '@/payload-types'

export const beforeValidateHook: CollectionBeforeValidateHook<FormSubmission> = async ({
  data,
}) => {
  return data
}