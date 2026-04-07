interface HeroProps {
  name: string;
}

export default function Hero({ name }: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/235922/pexels-photo-235922.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <nav className="relative z-20 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="backdrop-blur-md bg-white/10 px-4 py-2 rounded-full border border-white/20">
            <span className="text-white font-semibold tracking-wide">Gutmann Physical Therapy</span>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="backdrop-blur-md bg-[#AAF0D1]/20 px-3 py-1.5 rounded-full border border-[#AAF0D1]/30">
            <span className="text-white text-sm font-medium">PT, DPT</span>
          </div>
          <div className="backdrop-blur-md bg-[#AAF0D1]/20 px-3 py-1.5 rounded-full border border-[#AAF0D1]/30">
            <span className="text-white text-sm font-medium">CSCS</span>
          </div>
          <div className="backdrop-blur-md bg-[#AAF0D1]/20 px-3 py-1.5 rounded-full border border-[#AAF0D1]/30">
            <span className="text-white text-sm font-medium">TPI Level 1</span>
          </div>
        </div>
      </nav>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4">
          <h1 className="text-8xl md:text-9xl lg:text-[10rem] font-black text-white leading-none tracking-tight">
            {name}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mt-8 font-light tracking-wide">
            Rehab to Performance | Seattle, WA
          </p>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
