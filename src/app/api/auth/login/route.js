import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectToDB from "../../../../lib/mongodb";
import User from "../../../../models/User";

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    await connectToDB();

    const user = await User.findOne({ email });
    if (!user) {
      return new Response(
        JSON.stringify({ success: false, message: "User not found" }),
        { status: 404 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid credentials" }),
        { status: 401 }
      );
    }

    const token = jwt.sign({ userId: user._id }, "your_jwt_secret", {
      expiresIn: "1h",
    });

    const isProduction = process.env.NODE_ENV === "production";

    return new Response(JSON.stringify({ success: true, token }), {
      status: 200,
      headers: {
        "Set-Cookie": `token=${token}; Path=/; Max-Age=86400; SameSite=Lax${isProduction ? "; Secure" : ""}`,
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500 }
    );
  }
}
