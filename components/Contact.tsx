
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('success');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Vamos Conversar?</h2>
          <p className="text-slate-600 mb-10 text-lg">
            Tem um projeto em mente ou precisa de uma manutenção urgente? Nossa equipe está pronta para te atender.
          </p>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center rounded-lg shadow-md flex-shrink-0">
                <i className="fas fa-map-marker-alt text-slate-900"></i>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Endereço</h4>
                <p className="text-slate-600">Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP, 01310-100</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center rounded-lg shadow-md flex-shrink-0">
                <i className="fas fa-phone-alt text-slate-900"></i>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Telefone e WhatsApp</h4>
                <p className="text-slate-600">(11) 99999-9999</p>
                <p className="text-slate-600">(11) 4004-0000</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center rounded-lg shadow-md flex-shrink-0">
                <i className="fas fa-envelope text-slate-900"></i>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">E-mail</h4>
                <p className="text-slate-600">contato@rmeletrica.com.br</p>
                <p className="text-slate-600">comercial@rmeletrica.com.br</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h4 className="font-bold text-slate-900 mb-4">Siga-nos nas redes sociais</h4>
            <div className="flex space-x-4">
              {['facebook', 'instagram', 'linkedin', 'whatsapp'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-yellow-500 hover:border-yellow-500 transition-all">
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-700 font-semibold mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all outline-none"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-2">E-mail</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all outline-none"
                  placeholder="email@exemplo.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-2">Celular / WhatsApp</label>
              <input 
                type="tel" 
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all outline-none"
                placeholder="(11) 99999-9999"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-2">Mensagem</label>
              <textarea 
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all outline-none resize-none"
                placeholder="Como podemos ajudar você hoje?"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 rounded-lg transition-all shadow-lg text-lg transform hover:-translate-y-1 active:scale-95"
            >
              Enviar Mensagem
            </button>

            {status === 'success' && (
              <div className="p-4 bg-green-100 text-green-800 rounded-lg border border-green-200 animate-fadeIn">
                <i className="fas fa-check-circle mr-2"></i> Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
