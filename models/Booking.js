import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    hotel: { type: String, required: true },
    city: { type: String, required: true },
    room: { type: Number, required: true },
    entry: { type: Date, required: true },
    exit: { type: Date, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Booking ||
  mongoose.model("Booking", BookingSchema);