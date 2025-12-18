'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export async function submitContactForm(formData: {
  name: string;
  email: string;
  message: string;
}) {
  const validatedFields = contactFormSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed.',
    };
  }

  // In a real application, you would handle the form submission here,
  // e.g., send an email, save to a database, etc.
  console.log('Form submitted successfully:', validatedFields.data);

  return {
    success: true,
    message: 'Thank you for your message! I will get back to you soon.',
  };
}
