'use server';

import { LoginSchema } from '@/schema/login';
import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';

type Response =
    | { success: true }
    | { success: false, error: string };

export async function signInAction(
    formData: LoginSchema,
): Promise<Response> {
    try {
        await signIn('credentials', { ...formData, redirect: false });

        return { success: true };
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return {
                        success: false,
                        error: 'Invalid credentials.'
                    };
                default:
                    return {
                        success: false,
                        error: 'Something went wrong.'
                    };
            }
        }

        return {
            success: false,
            error: 'Something went wrong.'
        };
    }
}

export async function signOutAction() {
    try {
        await signOut({ redirect: false });
    } catch (error) {
        console.error('Failed to sign out:', error);
    }
}