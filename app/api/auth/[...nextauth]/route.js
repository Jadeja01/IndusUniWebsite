import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/backend/dbConnect";
import User from "@/backend/models/User";
import Profile from "@/backend/models/Profile";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "select_account",
        },
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  callbacks: {
    // Runs on Google login
    async signIn({ user }) {
      try {
        await connectDB();

        const email = user.email;

        if (!email.endsWith("@iite.indusuni.ac.in")) {
          return false;
        }
        let dbUser = await User.findOne({ email: user.email });

        // First-time login
        if (!dbUser) {
          dbUser = await User.create({
            name: user.name,
            email: user.email,
            image: user.image,
            provider: "google",
            profileCompleted: false,
            accessPercent: 70,
          });

          // Create empty profile in database
          await Profile.create({
            userId: dbUser._id,
          });
        }

        return true;
      } catch (err) {
        console.error("SignIn error:", err);
        return false;
      }
    },

    // Attach DB fields to JWT
    async jwt({ token }) {
      if (!token.email) return token;
      await connectDB();
      const dbUser = await User.findOne({ email: token.email });
      if (dbUser) {
        token.userId = dbUser._id;
        token.uName = dbUser.name;
        token.uEmail = dbUser.email;
        token.profileCompleted = dbUser.profileCompleted;
        token.accessPercent = dbUser.accessPercent;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.userId;
        session.user.profileCompleted = token.profileCompleted;
        session.user.accessPercent = token.accessPercent;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

// What I learned
// 1. We can restrict sign-in to specific email domains by checking the email in the signIn callback.
// 2. How to use callbacks
