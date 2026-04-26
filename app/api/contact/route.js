import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(req) {
  try {
    const data = await req.json();

    await connectDB();

    const { name, email, mobile, message } = data;

    // 🔥 1. Required field validation
    if (!name || !email || !mobile || !message) {
      return Response.json({
        success: false,
        message: "All fields are required",
      });
    }

    // 🔥 2. Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({
        success: false,
        message: "Invalid email address",
      });
    }

    // 🔥 3. Mobile validation (ONLY 10 digits)
    if (!/^\d{10}$/.test(mobile)) {
      return Response.json({
        success: false,
        message: "Mobile number must be exactly 10 digits",
      });
    }

    // 🔥 4. Save to DB
    const contact = await Contact.create({
      name,
      email,
      mobile,
      message,
    });

    return Response.json({
      success: true,
      contact,
    });

  } catch (error) {
    return Response.json({
      success: false,
      message: error.message,
    });
  }
}