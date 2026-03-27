import { defineAction } from 'astro:actions';
import { z } from 'astro/zod';

export const server = {
  formSubmission: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string(),
      email: z.email().optional(),
      phone: z.string().optional(),
      message: z.string()
    }),
    handler: async (input) => {
      return `Data is: ${input}`
    }
  })
}