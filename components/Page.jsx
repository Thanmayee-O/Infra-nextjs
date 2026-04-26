export default function Page(){
    return(
        <div className="relative w-full h-screen overflow-hidden">
        <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
        >
        <source src="/video.mp4" type="video/mp4" />
     </video>

    {/* Overlay content */}
    <div className="relative z-10 text-white">

    </div>
    </div>
    )
}


