"use client";

export default function AOSWrapper({
  children,
  animation = "fade-left",
  delay = 0,
  duration = 3000,
}) {
  return (
    <div
      data-aos={animation}
      data-aos-delay={delay}
      data-aos-duration={duration}
      data-aos-once="false"   
    >
      {children}
    </div>
  );
}