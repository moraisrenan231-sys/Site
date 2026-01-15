
import React from 'react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Manutenção Preventiva',
    description: 'Evite paradas inesperadas e custos elevados com inspeções técnicas periódicas em painéis e fiação.',
    icon: 'fa-tools',
  },
  {
    id: '2',
    title: 'Projetos Elétricos',
    description: 'Dimensionamento correto de carga e diagramas unifilares para residências, comércios e indústrias.',
    icon: 'fa-drafting-compass',
  },
  {
    id: '3',
    title: 'Energia Solar',
    description: 'Instalação de sistemas fotovoltaicos de última geração para redução de até 95% na conta de luz.',
    icon: 'fa-sun',
  },
  {
    id: '4',
    title: 'Automação Predial',
    description: 'Controle iluminação, climatização e segurança diretamente do seu smartphone.',
    icon: 'fa-home',
  },
  {
    id: '5',
    title: 'Cabeamento Estruturado',
    description: 'Instalação de redes de dados e voz com certificação para empresas de pequeno a grande porte.',
    icon: 'fa-network-wired',
  },
  {
    id: '6',
    title: 'Laudos e NR10',
    description: 'Adequação às normas de segurança do trabalho e emissão de laudos técnicos de inspeção (ART).',
    icon: 'fa-file-signature',
  },
];

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Especialistas em Energia</h2>
        <div className="w-20 h-1.5 bg-yellow-400 mx-auto rounded-full mb-6"></div>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Oferecemos um portfólio completo de soluções em eletricidade, unindo técnica apurada às normas mais rigorosas de segurança.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="group bg-slate-50 p-8 rounded-2xl transition-all hover:bg-white hover:shadow-2xl border border-transparent hover:border-yellow-400/20"
          >
            <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:bg-yellow-400 transition-colors">
              <i className={`fas ${service.icon} text-2xl text-yellow-500 group-hover:text-slate-900`}></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
            <p className="text-slate-600 leading-relaxed">
              {service.description}
            </p>
            <div className="mt-6">
              <a href="#contato" className="text-yellow-600 font-semibold text-sm flex items-center space-x-2 group-hover:text-yellow-700">
                <span>Saiba mais</span>
                <i className="fas fa-arrow-right text-xs transform group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
