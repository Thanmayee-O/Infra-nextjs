import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";

export async function POST(req) {
  try {
    const data = await req.json();

    await connectDB();

    const { room, entry, exit } = data;

    // Check overlapping bookings
    const existingBooking = await Booking.findOne({
      room: Number(room),
      $or: [
        {
          entry: { $lt: exit },
          exit: { $gt: entry },
        },
      ],
    });

    if (existingBooking) {
      return Response.json({
        success: false,
        message: "Room already booked for selected dates",
      });
    }

    // Save booking
    const booking = await Booking.create(data);

    return Response.json({
      success: true,
      booking,
    });

  } catch (err) {
    return Response.json({
      success: false,
      message: err.message,
    });
  }
}