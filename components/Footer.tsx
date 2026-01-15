
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-yellow-400 p-1 rounded">
                <i className="fas fa-bolt text-slate-900 text-lg"></i>
              </div>
              <span className="font-bold text-2xl tracking-tighter text-white">
                R&M <span className="text-yellow-400">Elétrica</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Sua parceira de confiança para todas as necessidades elétricas. Segurança, qualidade e inovação em cada projeto.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white uppercase tracking-wider">Links Rápidos</h4>
            <ul className="space-y-4">
              {['Início', 'Serviços', 'Sobre Nós', 'Contato', 'Privacidade'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors flex items-center space-x-2">
                    <i className="fas fa-chevron-right text-[10px]"></i>
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white uppercase tracking-wider">Serviços</h4>
            <ul className="space-y-4">
              {['Manutenção', 'Energia Solar', 'Instalação Comercial', 'Projetos Elétricos'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white uppercase tracking-wider">Newsletter</h4>
            <p className="text-slate-400 mb-4">Receba dicas de economia e segurança elétrica.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-slate-800 border-none rounded-l-lg px-4 py-3 w-full focus:ring-1 focus:ring-yellow-400 outline-none"
              />
              <button className="bg-yellow-400 text-slate-900 px-4 py-3 rounded-r-lg hover:bg-yellow-500 transition-colors">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} R&M Elétrica & Soluções. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Termos de Uso</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
