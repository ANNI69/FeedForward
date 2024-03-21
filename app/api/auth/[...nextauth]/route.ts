import { comparePassword } from "@/lib/comparePassword";
import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        await connectDB();
        const user = await User.findOne({ email: credentials?.email });
        if (
          await comparePassword(credentials?.password as string, user.password)
        ) {
          console.log("Password match");
          return user;
        } else {
          console.log("Password does not match");
        }
        console.log({ user });
        return null;
        // return NextResponse.json({ message: "GET /api/auth/error" });
      },
    }),
  ],
});

export { handler as GET, handler as POST };
