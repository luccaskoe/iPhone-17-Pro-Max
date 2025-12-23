import hero from '../img/hero.jpg';

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background image (full cover, responsivo) */}
      <img src={hero} alt="iPhone hero" className="absolute inset-0 w-full h-full object-cover opacity-90 z-0" />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80 z-10 pointer-events-none"></div>

      {/* Content wrapper (centra conteúdo sobre a imagem) */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4 text-center">
        {/* Se quiser adicionar título/textos, coloque aqui */}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
