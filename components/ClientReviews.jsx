"use client";

const reviews = [
  {
    title: "The Villas at Maple Grove",
    text: "The Villas at Maple Grove offered the perfect balance of elegance and serenity. I was looking for a space that feels like home, and this villa delivered on all fronts. The quiet neighborhood and expansive design make it the ideal sanctuary. I couldn't be happier!",
    author: "Anjali Sharma",
  },
  {
    title: "Skyline Heights",
    text: "Living in Skyline Heights has been a dream come true. The views are absolutely breathtaking, and the modern amenities make every day feel luxurious. The location in Gachibowli is perfect—close to everything yet peaceful. Highly recommend this place!",
    author: "Ravi Kumar",
  },
  {
    title: "Green Park Towers",
    text: "As an eco-conscious buyer, Green Park Towers was exactly what I was looking for. The blend of modern design and sustainable features made it an easy choice. I feel good knowing that my home is energy-efficient, and the community is equally forward-thinking.",
    author: "Suresh Reddy",
  },
  {
    title: "Sapphire Residences",
    text: "From the first visit, I knew Sapphire Residences was special. The luxurious interiors, amazing amenities, and the overall design quality exceeded my expectations. It's more than just a home—it's a lifestyle. The perfect place to unwind after a busy day.",
    author: "Priya Desai",
  },
  {
    title: "Urban Greens",
    text: "A perfect blend of nature and comfort. The surroundings are peaceful and the homes are thoughtfully designed.",
    author: "Kiran Kumar",
  },
];

export default function ReviewsSlider() {
  return (
    <section className="w-full bg-[#FFF8EF] py-12 md:py-20">

      {/* Heading */}
      <h2 className="text-center text-2xl md:text-4xl text-gray-800 mb-10 md:mb-16">
        Our Client Reviews
      </h2>

      {/* Scroll Container */}
      <div className="overflow-x-auto no-scrollbar snap-x snap-mandatory">
        <div className="
          flex gap-4 md:gap-10 
          w-auto md:w-[1922px] 
          px-4 md:px-6
        ">

          {reviews.map((item, index) => (
            <div
              key={index}
              className="
                w-[85%] sm:w-[70%] md:w-[940px]
                min-h-[320px] md:min-h-[420px]
                bg-[#F9F9F9]
                border border-[#E0D6C3]
                p-5 sm:p-6 md:p-[80px]
                flex flex-col
                justify-between
                gap-6 md:gap-10
                shrink-0
                snap-start
              "
            >
              {/* Title */}
              <h3 className="text-[#C78800] text-sm md:text-lg font-medium">
                {item.title}
              </h3>

              {/* Quote */}
              <p className="text-base sm:text-lg md:text-2xl leading-relaxed text-[#212121]">
                “{item.text}”
              </p>

              {/* Author */}
              <p className="text-[#949494] italic text-sm md:text-lg">
                — {item.author}, Resident
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10 md:mt-16">
        <button className="px-6 py-3 md:px-9 md:py-4 border border-[#B88917] text-[#B88917] bg-[#F9F9F9]">
          VIEW ALL
        </button>
      </div>

    </section>
  );
}