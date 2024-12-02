import NextAuth from "next-auth";

export default NextAuth({
    callbacks: {
        authorized: ({ auth, request: { nextUrl } }) => {
            const isLogged = !!auth?.user;
            const isPrivate = nextUrl.pathname.startsWith("/private");

            if (isPrivate && !isLogged) {
                const redirectUrl = new URL(`/login`, nextUrl);

                // Add the current URL as a query parameter to redirect back after login
                redirectUrl.searchParams.set("redirectTo", nextUrl.pathname);
                const searchParams = new URLSearchParams(nextUrl.search);
                searchParams.forEach((value, key) => {
                    redirectUrl.searchParams.set(key, value);
                });
                return Response.redirect(redirectUrl);
            }
            return true;
        },
    },
    providers: []
}).auth;

export const config = {
    // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
    matcher: ['/private(.*)'],
};