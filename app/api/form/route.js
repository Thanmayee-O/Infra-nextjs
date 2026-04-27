import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";

export async function POST(req) {
  try {
    const data = await req.json();

    await connectDB();

    const { room, entry, exit } = data;

    // ✅ Convert to Date
    const entryDate = new Date(entry);
    const exitDate = new Date(exit);

    // ✅ Check overlapping booking
    const existingBooking = await Booking.findOne({
      room: Number(room),
      entry: { $lt: exitDate },
      exit: { $gt: entryDate },
    });

    if (existingBooking) {
      return Response.json({
        success: false,
        message: "Room already booked for selected dates",
      });
    }

    // ✅ Save booking
    const booking = await Booking.create({
      ...data,
      room: Number(room),
      entry: entryDate,
      exit: exitDate,
    });

    return Response.json({
      success: true,
      booking,
    });
  } catch (err) {
    console.log("API ERROR:", err); // 🔥 debug

    return Response.json({
      success: false,
      message: err.message,
    });
  }
}