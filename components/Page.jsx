export default function VideoSection() {
  return (
    <section className="bg-black py-20 flex justify-center items-center">
      
      {/* Video Container */}
      <div className="w-[90vw] overflow-hidden shadow-lg">
        
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

    </section>
  );
}