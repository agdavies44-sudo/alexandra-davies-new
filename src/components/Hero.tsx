export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[min(880px,84svh)] min-h-[560px] overflow-hidden bg-[#111] max-[700px]:h-[68svh] max-[700px]:min-h-[440px]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/media/hero-italy-104.jpg"
        alt="A sunlit Italian landscape of olive groves and rolling hills"
        className="block h-full w-full scale-[1.002] object-cover object-[50%_46%] saturate-[0.92] contrast-[1.03]"
      />
      <video
        className="pointer-events-none absolute left-1/2 top-[53%] z-[2] h-auto w-[min(70vw,890px)] -translate-x-1/2 -translate-y-1/2 mix-blend-screen opacity-[0.82] max-[700px]:top-[56%] max-[700px]:w-[92vw]"
        autoPlay
        muted
        loop
        playsInline
        aria-label="Alexandra Davies signature"
      >
        <source src="/media/signature.mp4" type="video/mp4" />
      </video>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/18 via-transparent via-55% to-black/38"
        aria-hidden="true"
      />
    </section>
  );
}
