
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/id/119/800/600" 
              alt="Equipe R&M Elétrica" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-yellow-400 rounded-2xl -z-10 hidden md:block"></div>
          <div className="absolute top-10 left-10 bg-white p-6 rounded-xl shadow-lg z-20 hidden md:block border-l-4 border-yellow-400">
            <p className="text-4xl font-bold text-slate-900">15+</p>
            <p className="text-slate-600 font-medium">Anos de Experiência</p>
          </div>
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Excelência Técnica e Compromisso com o Cliente</h2>
          <p className="text-slate-600 mb-6 text-lg leading-relaxed">
            A <strong>R&M Elétrica & Soluções</strong> nasceu da paixão pela engenharia e do desejo de oferecer um serviço diferenciado no mercado de instalações elétricas.
          </p>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Nossa missão é fornecer soluções energéticas eficientes e seguras, minimizando riscos e maximizando a produtividade de nossos clientes através de tecnologias modernas e mão de obra altamente qualificada.
          </p>
          
          <div className="space-y-4">
            {[
              'Profissionais Certificados (NR10, NR35)',
              'Atendimento personalizado 24/7 para emergências',
              'Utilização de materiais de primeira linha (marcas premium)',
              'Garantia total de serviço e suporte pós-venda'
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-yellow-400/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-yellow-600 text-xs"></i>
                </div>
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <button className="bg-slate-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition-colors shadow-lg">
              Conheça Nossa Equipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
