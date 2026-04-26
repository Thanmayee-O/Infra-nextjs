export default function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a] border-t border-blue-500/30">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          
          {/* Column 1 - Logo */}
          <div className="flex items-start">
            <div className="text-3xl md:text-4xl font-bold">
                <img src="https://res.cloudinary.com/dybw1km5u/image/upload/v1777143162/Group_2_omm0ry.png"/>
            </div>
          </div>

          {/* Column 2 - Navigation Links */}
          <div className="flex flex-col space-y-6">
            <nav className="flex flex-col gap-[32px] ml-14">
              <a href="#about" className="text-[#F9F9F9] hover:text-white transition-colors duration-300 text-[20px] md:text-base">
                ABOUT US
              </a>
              <a href="#projects" className="text-[#F9F9F9] hover:text-white transition-colors duration-300 text-[20px] md:text-base">
                PROJECTS
              </a>
              <a href="#contact" className="text-[#F9F9F9] hover:text-white transition-colors duration-300 text-[20px] md:text-base">
                CONTACT US
              </a>
              <a href="#services" className="text-[#F9F9F9] hover:text-white transition-colors duration-300 text-[20px] md:text-base">
                SERVICES
              </a>
            </nav>
          </div>

          {/* Column 3 - Contact Information */}
          <div className="flex flex-col space-y-2">
            <div className="space-y-6">
              <div>
                <p className="text-[#F9F9F9] text-[20px] md:text-base leading-relaxed">
                  Plot No:32, Sy.No:135, Brindavan Colony Gangapet road, SR Dist. Hyderabad - 500075, Telangana
                </p>
              </div>
              <div>
                <a href="mailto:mailustto@einfra.com" className="text-[#F9F9F9] text-[20px] font-[500] text-sm md:text-base">
                  mailustto@einfra.com
                </a>
              </div>
              <div>
                <a href="tel:+918974600000" className="text-[#F9F9F9] text-[20px] font-[500] text-sm md:text-base">
                  +91-897466XXXX
                </a>
              </div>
            </div>
          </div>

          {/* Column 4 - Social Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-[500] text-sm md:text-base mb-2">Follow us on</h3>
            <div className="flex flex-col space-y-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#F9F9F9] hover:text-blue-400 transition-colors duration-300 text-sm md:text-base flex items-center gap-2"
              >
                Instagram <span className="text-xl">↗</span>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#F9F9F9] hover:text-blue-400 transition-colors duration-300 text-sm md:text-base flex items-center gap-2"
              >
                Linkedin <span className="text-xl">↗</span>
              </a>
            </div>
          </div>

        </div>
        
      </div>
      <div className="w-full h-[1px] bg-gray-900"></div>

      {/* Bottom Footer Bar */}
      <div className="w-full bg-[#949494] text-[16px] flex justify-between items-center px-6 md:px-16 lg:px-32 py-3">
  
          <span className="text-[#C78800] font-normal">
            © E-INFRA 2026
          </span>
          <span className="text-[#C78800] font-normal">
            Legal, Privacy, Cookies, Settings
          </span>
      </div>
    </footer>
  );
}