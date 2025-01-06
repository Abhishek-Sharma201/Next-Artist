import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token, user }) {
      try {
        session.user.id = token.sub;
        return session;
      } catch (error) {
        console.error("Error in session callback:", error);
        throw new Error("Session creation failed.");
      }
    },
    async signIn({ account, profile }) {
      try {
        if (account.provider === "google") {
          return profile.email_verified || false;
        }
        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
    },
  },
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  events: {
    async error(message) {
      console.error("NextAuth Error:", message);
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
