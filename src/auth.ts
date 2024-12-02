import NextAuth, { type DefaultSession } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { loginSchema } from "./schema/login";
import { getUserWithPassword } from "./lib/api";
import bcrypt from "bcrypt";
import { cache } from "react";

declare module "next-auth" {
    /**
     * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            name: string
            email: string
            /**
             * By default, TypeScript merges new interface properties and overwrites existing ones.
             * In this case, the default session user properties will be overwritten,
             * with the new ones defined above. To keep the default session user properties,
             * you need to add them back into the newly declared interface.
             */
        } & DefaultSession["user"]
    }
}


export const { handlers, signIn, signOut, auth } = NextAuth({
    pages: {
        signIn: "/login",
    },
    providers: [Credentials({
        async authorize(credentials) {
            const parsedCredentials = loginSchema.safeParse(credentials);

            if (parsedCredentials.success) {
                const { email, password } = parsedCredentials.data;

                const user = await getUserWithPassword(email);
                if (!user) return null;

                const passwordsMatch = await bcrypt.compare(password, user.password);
                if (passwordsMatch) return user;
            }

            console.error('Invalid credentials');
            return null;
        },
    }),],
})

export const getSession = cache(async () => {
    const session = await auth();
    return session;
})