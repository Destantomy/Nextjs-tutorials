import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    secret: 'desta11234',
    providers: [
        Credentials({
            type: 'credentials',
            name: 'credentials',
            credentials: {
                email: {label: 'Email', type: 'email'},
                password: {label: 'Password', type: 'password'},
            },

            async authorize(credentials) {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };
                const user: any = {
                    id: 1,
                    name: 'desta',
                    email: 'desta@gmail.com',
                    role: 'admin',
                }
                if (email === 'desta@gmail.com' && password === '1234') {
                    return user;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({token, account, profile, user}: any) {
            if (account?.provider === 'credentials') {
                token.email = user.email;
                token.fullname = user.fullname;
                token.role = user.role;
            }
            return token;
        },

        async session({session, token}: any) {
            if('email' in token) {
                session.user.email = token.email;
            }
            if('fullname' in token) {
                session.user.fullname = token.fullname;
            }
            if('role' in token) {
                session.user.role = token.role;
            }
            return session;
        },
    },
    pages: {
        signIn: '/login',
    }
};

const handler = NextAuth(authOptions);

export {
    handler as GET, handler as POST
}