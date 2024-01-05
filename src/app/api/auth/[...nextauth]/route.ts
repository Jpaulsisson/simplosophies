import { AuthOptions } from "next-auth";
import Github from "next-auth/providers/github";
import NextAuth from "next-auth/next";




const authOptions: AuthOptions = {
  providers: [
    Github({
      clientId: '7d518a1e044636b2b404',
      clientSecret: 'ddbfa22746b19a86d286e9c66256f22ff6b5d9a1',
    }),
  ],
  callbacks: {
    async session({ session, token }: any) {
      session.user.name = `${session?.user?.name}_${token?.sub}`
      console.log(session, token)

      return session
    }
  },
  secret: 'default_secret_key'
}

const nextAuth = NextAuth(authOptions);

export { nextAuth as GET, nextAuth as POST }