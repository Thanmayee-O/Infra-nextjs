

export default function ScrollingImages() {
  return (
    <div className="overflow-hidden w-full bg-[#212121] py-4">
      <div className="flex gap-6 animate-scroll w-max">
        
        {/* First set */}
        <img src="/images/apila.svg" className="w-40 h-40 object-contain" />
        <img src="/images/lapaloma.svg" className="w-40 h-40 object-contain" />
        <img src="/images/riveredge.svg" className="w-40 h-40 object-contain" />
        <img src="/images/rivera.svg" className="w-40 h-40 object-contain" />
        <img src="/images/skyven.svg" className="w-40 h-40 object-contain" />
        <img src="/images/skyven.svg" className="w-40 h-40 object-contain" />
        <img src="/images/skyila.svg" className="w-40 h-40 object-contain" />
        
        
        
        

        {/* Duplicate set for infinite effect */}
       <img src="/images/apila.svg" className="w-40 h-40 object-contain" />
        <img src="/images/lapaloma.svg" className="w-40 h-40 object-contain" />
        <img src="/images/riveredge.svg" className="w-40 h-40 object-contain" />
        <img src="/images/rivera.svg" className="w-40 h-40 object-contain" />
        <img src="/images/skyven.svg" className="w-40 h-40 object-contain" />
        <img src="/images/skyven.svg" className="w-40 h-40 object-contain" />
        <img src="/images/skyila.svg" className="w-40 h-40 object-contain" />
      </div>
    </div>
  );
}