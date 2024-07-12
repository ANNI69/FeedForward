import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const position = "receiver";
  const users = await User.find({ position: position })
    .select("name email")
    .limit(5);
  return NextResponse.json({ users });
}
