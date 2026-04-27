export default function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a] border-t border-blue-500/30">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-16 text-center md:text-left">
          
          {/* Column 1 - Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              src="https://res.cloudinary.com/dybw1km5u/image/upload/v1777143162/Group_2_omm0ry.png"
              className="w-full h-20 md:h-[100px]"
            />
          </div>

          {/* Column 2 - Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <nav className="flex flex-col gap-4 md:gap-[32px] md:ml-14">
              <a href="#about" className="text-[#F9F9F9] text-base md:text-[20px]">
                ABOUT US
              </a>
              <a href="#projects" className="text-[#F9F9F9] text-base md:text-[20px]">
                PROJECTS
              </a>
              <a href="#contact" className="text-[#F9F9F9] text-base md:text-[20px]">
                CONTACT US
              </a>
              <a href="#services" className="text-[#F9F9F9] text-base md:text-[20px]">
                SERVICES
              </a>
            </nav>
          </div>

          {/* Column 3 - Contact */}
          <div className="space-y-4 md:space-y-6">
            <p className="text-[#F9F9F9] text-sm md:text-[20px] leading-relaxed">
              Plot No:32, Sy.No:135, Brindavan Colony Gangapet road, SR Dist. Hyderabad - 500075, Telangana
            </p>

            <a href="mailto:mailustto@einfra.com" className="text-[#F9F9F9] text-sm md:text-[20px] font-medium">
              mailustto@einfra.com
            </a>

            <a href="tel:+918974600000" className="text-[#F9F9F9] text-sm md:text-[20px] font-medium">
              +91-897466XXXX
            </a>
          </div>

          {/* Column 4 - Social */}
          <div className="space-y-4">
            <h3 className="text-white font-medium text-sm md:text-base">
              Follow us on
            </h3>

            <div className="flex flex-col gap-3 items-center md:items-start">
              <a href="#" className="text-[#F9F9F9] text-sm md:text-base flex items-center gap-2">
                Instagram ↗
              </a>
              <a href="#" className="text-[#F9F9F9] text-sm md:text-base flex items-center gap-2">
                Linkedin ↗
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-900"></div>

      {/* Bottom Bar */}
      <div className="w-full bg-[#6B6B6B] text-[14px] md:text-[16px] flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 px-6 md:px-16 lg:px-32 py-3 text-center md:text-left">
        
        <span className="text-[#C78800]">
          © E-INFRA 2026
        </span>

        <span className="text-[#C78800]">
          Legal, Privacy, Cookies, Settings
        </span>

      </div>
    </footer>
  );
}