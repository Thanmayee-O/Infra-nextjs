import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-16 py-8 text-white">
      {/* Logo */}
      <div className="flex items-center gap-1 font-bold tracking-wider text-xl">
        <span className="text-[#D4AF37]">e</span>
        <span>-INFRA</span>
      </div>

      {/* Navigation Links & Hamburger */}
      <div className="flex items-center gap-6 md:gap-10 text-xs md:text-sm tracking-widest font-medium uppercase">
        <div className="hidden md:flex items-center gap-8">
          <Link href="#projects" className="hover:text-[#D4AF37] transition-colors">
            Projects
          </Link>
          <Link href="#gallery" className="hover:text-[#D4AF37] transition-colors">
            Gallery
          </Link>
          <Link href="#contact" className="hover:text-[#D4AF37] transition-colors">
            Contact Us
          </Link>
        </div>
        
        {/* Hamburger Icon */}
        <button className="flex flex-col justify-center items-center gap-[5px] w-6 h-6 focus:outline-none">
          <span className="block w-6 h-[2px] bg-white"></span>
          <span className="block w-6 h-[2px] bg-white"></span>
          <span className="block w-6 h-[2px] bg-white"></span>
        </button>
      </div>
    </nav>
  );
}
