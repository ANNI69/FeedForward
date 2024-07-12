import { NextResponse } from "next/server";

export async function POST(req:Request, res:Response) {
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
