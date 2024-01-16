import { AuthOptions } from "next-auth";
import Github from "next-auth/providers/github";
import NextAuth from "next-auth/next";

const GithubID = process.env.GITHUB_AUTH_ID as string;
const GithubSecret = process.env.GITHUB_AUTH_SECRET as string;

const authOptions: AuthOptions = {
  providers: [
    Github({
      clientId: GithubID,
      clientSecret: GithubSecret,
    }),
  ],
  callbacks: {
    async session({ session, token }: any) {
      session.user.name = `${session?.user?.name}_${token?.sub}`
      return session
    }
  },
  secret: 'default_secret_key'
}

const nextAuth = NextAuth(authOptions);

export { nextAuth as GET, nextAuth as POST }