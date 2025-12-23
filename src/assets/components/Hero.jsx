import hero from '../img/hero.jpg';

function Hero() {
  return (
    <section className="relative min-h-fit md:min-h-screen overflow-hidden bg-black">
      <div className="relative text-center mt-6 md:absolute md:top-24 md:left-1/2 md:-translate-x-1/2 z-0">
        
        <img src={hero} className="w-full h-auto md:h-full object-contain md:object-cover md:absolute md:inset-0 opacity-90" />
         
         <div className="absolute inset-0 bg-gradient-to-be from-black/30 via-transparent to-black/809"> </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-0 md:z-10 animate-bounce">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
