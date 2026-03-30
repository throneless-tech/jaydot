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
      try {
        const req = await fetch(`${import.meta.env.PUBLIC_API_URL || "https://localhost:3000"}/api/formSubmissions`, {
          method: "POST", 
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(input),
        })
        const data = await req.json()
        return data
      } catch (err) {
        console.log(err)
        return err.message;
      }

    }
  })
}