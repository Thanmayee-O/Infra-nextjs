export default function RiverEdge() {
    return (
        <div className="relative w-[1920px] h-[960px] max-w-full min-h-screen md:h-[960px] bg-[url('https://res.cloudinary.com/dybw1km5u/image/upload/v1777121570/a5cf2d70e29ae7be29139e57902786a69f2bb604_xzavz0.png')] bg-cover bg-center flex items-center px-5 sm:px-10 md:px-20 text-white overflow-hidden">

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 max-w-xl">

                {/* Subtitle */}
                <p className="text-[14px] sm:text-[16px] md:text-[20px] text-[#DCBC82] mb-3 sm:mb-4 ml-3 uppercase font-semibold">
                    Featured Projects - 03
                </p>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-[80px] font-[600] whitespace-normal md:whitespace-nowrap leading-[1.1] md:leading-[0.95] mt-2 font-Plus Jakarta Sans">
                    SKYLINE HEIGHTS
                </h1>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mb-3 sm:mb-4 ml-1 mt-3">
                    A luxury high-rise offering stunning city views and top-tier amenities designed 
                    <br className="hidden sm:block" /> for modern living.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                    <span className="text-xs sm:text-sm pt-[8px] sm:pt-[10px] pr-[16px] sm:pr-[24px] pb-[8px] sm:pb-[10px] pl-[16px] sm:pl-[24px] rounded-full bg-white/15">
                        Hyderabad
                    </span>
                    <span className="text-xs sm:text-sm pt-[8px] sm:pt-[10px] pr-[16px] sm:pr-[24px] pb-[8px] sm:pb-[10px] pl-[16px] sm:pl-[24px] rounded-full bg-white/15">
                        2025
                    </span>
                    <span className="text-xs sm:text-sm pt-[8px] sm:pt-[10px] pr-[16px] sm:pr-[24px] pb-[8px] sm:pb-[10px] pl-[16px] sm:pl-[24px] rounded-full bg-white/15">
                        Residential
                    </span>
                </div>

                {/* Button */}
                <button className="p-[12px] sm:p-[14px] md:p-[16px] w-[130px] sm:w-[150px] md:w-[160px] h-[45px] sm:h-[48px] md:h-[50px] border border-white text-xs sm:text-sm hover:bg-white hover:text-black transition">
                    VIEW
                </button>

            </div>
        </div >
    );
}