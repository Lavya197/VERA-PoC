import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sql } from "@vercel/postgres"; // or your db client

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password required" }, { status: 400 });
    }

    // Fetch company
    const { rows } = await sql`
      SELECT * FROM companies WHERE email = ${email} LIMIT 1;
    `;

    if (rows.length === 0) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    const company = rows[0];

    // Verify password
    const isValid = await bcrypt.compare(password, company.password);
    if (!isValid) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    // ✅ Login success → you can set cookies/session here
    return NextResponse.json({ message: "Login successful", companyId: company.id });
  } catch (err) {
    console.error("Login Error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
