import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const { email, password } = await req.json();
    console.log("User Details : ", email, password);

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (e) {
    console.log(e);
  }
}
