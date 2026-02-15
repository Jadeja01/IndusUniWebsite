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

  // Google Login Validation
  async signIn({ user }) {
    try {
      await connectDB();

      const email = user.email;

      // Restrict domain
      if (!email.endsWith("@iite.indusuni.ac.in")) {
        return false;
      }

      let dbUser = await User.findOne({ email });

      // First-time login
      if (!dbUser) {
        dbUser = await User.create({
          name: user.name,
          email: user.email,
          image: user.image,
          provider: "google",
          profileCompleted: false,
          accessPercent: 70,
          role: "user",
          tokens: 0, // IMPORTANT: default value
        });

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

  // Attach fresh DB fields to JWT (runs on every session check)
  async jwt({ token }) {
    try {
      if (!token.email) return token;

      await connectDB();

      const dbUser = await User.findOne({ email: token.email });

      if (dbUser) {
        token.userId = dbUser._id.toString();
        token.profileCompleted = dbUser.profileCompleted;
        token.accessPercent = dbUser.accessPercent;
        token.role = dbUser.role;
        token.tokens = dbUser.tokens; // 🔥 FIXED HERE
      }

      return token;
    } catch (err) {
      console.error("JWT callback error:", err);
      return token;
    }
  },

  // Attach JWT fields to session
  async session({ session, token }) {
    if (token && session.user) {
      session.user.id = token.userId;
      session.user.profileCompleted = token.profileCompleted;
      session.user.accessPercent = token.accessPercent;
      session.user.role = token.role;
      session.user.tokens = token.tokens; // 🔥 FIXED HERE
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
