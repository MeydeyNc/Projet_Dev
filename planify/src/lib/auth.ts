import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./db";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    secret: process.env.SECRET,
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/sign-in',
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "jsmith@mail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                const exisitingUser = await db.user.findUnique({
                    where: { email: credentials?.email }
                });
                if (!exisitingUser) {
                    return null;
                }

                const passwordMatch = await bcrypt.compare(credentials.password, exisitingUser.password);

                if (!passwordMatch) {
                    return null;
                }

                return {
                    id: `${exisitingUser.id}`,
                    username: exisitingUser.username,
                    email: exisitingUser.email
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                return {
                    ...token,
                    username: user.username
                }
            }
            return token
        },

        async session({ session, token, user }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    username: token.username
                }
            }
        },
    }
};