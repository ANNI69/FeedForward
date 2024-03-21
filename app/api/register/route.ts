import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { User } from "@/models/user";
import bcrypt from "bcryptjs";
export async function POST(req: any) {
  try {
    const { name, email, type, password, position, address, contact, estDate } =
      await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(name, email, password, type, address, contact, estDate);
    await connectDB();
    await User.create({
      name,
      email,
      password: hashedPassword,
      role: type,
      position: position,
      address,
      contact,
      estDate,
      status: "active",
    });
    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (e) {
    console.log(e);
  }
}
