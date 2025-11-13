'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    const validatedFields = contactFormSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Validation failed.',
      };
    }

    // In a real application, you would send an email here.
    // For this demo, we'll just log the data.
    console.log('Contact Form Submitted:');
    console.log(validatedFields.data);

    return { message: 'Thank you! Your message has been sent.', errors: null };
  } catch (e) {
    return {
      message: 'An unexpected error occurred.',
      errors: null,
    };
  }
}


