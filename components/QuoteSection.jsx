export default function QuoteSection() {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 md:px-16 bg-[#FFF8EF] text-[#1A1A1A] flex items-center justify-center">
      
      {/* Vertical Contact Link */}
      <div className="absolute right-8 top-1/3 -translate-y-1/2 rotate-270 origin-right hidden lg:block text-xs text-gray-400 uppercase">
        <a
          href="#contact"
          className="font-semibold px-6 py-2 border border-[#C78800] text-[#C78800] text-xs uppercase hover:bg-[#fff3e4] transition"
        >
          CONTACT US
        </a>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl w-full flex flex-col md:flex-row gap-8 md:gap-16">
        
        {/* Quote Marks */}
        <div className="text-6xl md:text-8xl text-black font-serif leading-none mt-2">
          &ldquo;&rdquo;
        </div>

        {/* Quote Text */}
        <div className="flex-1">
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-8">
            We work at the intersection of architectural design, construction science, and ecological research.
            Where dreams takes shape, spaces come alive
          </p>

          <button className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] border-[#D4AF37] pb-1 hover:text-black hover:border-black transition-colors">
            • e-infra
          </button>
        </div>
      </div>

    </section>
  );
}