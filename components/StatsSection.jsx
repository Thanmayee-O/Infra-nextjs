
export default function StatsSection() {
  const stats = [
    {
      number: "20+",
      label: "Years of Experience"
    },
    {
      number: "1500+",
      label: "Satisfied Home Owners"
    },
    {
      number: "30+",
      label: "Projects Completed"
    }
  ];

  return (
    <>
    <section className="w-full bg-[#212121] py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 z-20">
      <div className="max-w-6xl mx-auto">
        {/* Responsive Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center p-6 sm:p-8 hover:transform hover:scale-105 transition-transform duration-300"
            >
              {/* Number */}
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-3">
                {stat.number}
              </h3>
              {/* Label */}
              <p className="text-[24px] md:text-base lg:text-lg text-[#DCBC82] font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
    </>
  );
}
