import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/user";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
type Params = {
  email: string;
};
export async function GET(req: NextApiRequest, context: { params: Params }) {
  try {
    const email = context.params.email;
    await connectDB();
    const user = await User.findOne({ email });

    return NextResponse.json({ user });
  } catch (err) {
    return NextResponse.error();
  }
}
