export default function RiverEdge() {
    return (
        <div className="relative w-[1920px] h-[960px] bg-[url('https://res.cloudinary.com/dybw1km5u/image/upload/v1777121570/a5cf2d70e29ae7be29139e57902786a69f2bb604_xzavz0.png')] bg-cover bg-center flex items-center px-20 text-white overflow-hidden">

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 max-w-xl">

                {/* Subtitle */}
                <p className="text-[20px] text-[#DCBC82] mb-4 ml-3 uppercase font-semibold">
                    Featured Projects - 03
                </p>

                {/* Title */}
                <h1 className="text-[80px] font-[600] whitespace-nowrap leading-[0.95] mt-2 font-Plus Jakarta Sans">
                    SKYLINE HEIGHTS
                </h1>

                {/* Description */}
                <p className="text-sm text-gray-200 leading-relaxed mb-4 ml-1 mt-3 font-[16px]">
                    A luxury high-rise offering stunning city views and top-tier amenities designed <br /> for modern living.
                </p>

                {/* Tags */}
                <div className="flex gap-3 mb-8">
                    <span className="text-sm pt-[10px] pr-[24px] pb-[10px] pl-[24px] gap-10 rounded-full bg-white/15">
                        Hyderabad
                    </span>
                    <span className="text-sm pt-[10px] pr-[24px] pb-[10px] pl-[24px] rounded-full bg-white/15">
                        2025
                    </span>
                    <span className="text-sm pt-[10px] pr-[24px] pb-[10px] pl-[24px] gap-10 rounded-full bg-white/15">
                        Residential
                    </span>
                </div>

                {/* Button */}
                <button className="p-[16px] gap-[10px] w-[160px] h-[50px] border border-white text-sm hover:bg-white hover:text-black transition">
                    VIEW
                </button>

            </div>
        </div >
    );
}