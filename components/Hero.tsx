
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: 'url(https://picsum.photos/id/445/1920/1080)' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent z-10"></div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 bg-yellow-400 text-slate-900 font-bold rounded mb-6 animate-bounce">
            SOLUÇÕES ELÉTRICAS COMPLETAS
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
            Iluminando seu caminho com <span className="text-yellow-400 underline decoration-yellow-400/30 underline-offset-8">Segurança</span> e Inovação.
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-xl">
            Projetos elétricos, manutenção industrial e energia solar. Qualidade garantida para sua residência ou empresa.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#contato" 
              className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-center transition-all transform hover:-translate-y-1 shadow-xl"
            >
              Solicitar Orçamento
            </a>
            <a 
              href="#servicos" 
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-center transition-all"
            >
              Ver Nossos Serviços
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg className="relative block w-full h-12 text-white fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
