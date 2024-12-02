import * as z from 'zod';

export const loginSchema = z.object({
    email: z.string().email('This is not valid email address'),
    password: z
        .string()
        .min(8, { message: 'Password must contain at least 8 characters' }),
});

export type LoginSchema = z.infer<typeof loginSchema>;