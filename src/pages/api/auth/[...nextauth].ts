import NextAuth from "next-auth"
import type { NextAuthOptions } from 'next-auth'
import GithubProvider from "next-auth/providers/github"

import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/lib/prisma"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  ],
  callbacks: {
    async session({ session, token, user }) {
      if (session.user) {
        session.user.email = user.email
      }

      return session
    }
  }
}

export default NextAuth(authOptions)