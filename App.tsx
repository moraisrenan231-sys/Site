
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main className="flex-grow">
        <section id="inicio">
          <Hero />
        </section>
        <section id="servicos" className="py-20 bg-white">
          <Services />
        </section>
        <section id="sobre" className="py-20 bg-slate-50">
          <About />
        </section>
        <section id="contato" className="py-20 bg-white">
          <Contact />
        </section>
      </main>
      <Footer />
      
      {/* Smart Assistant Toggle */}
      <button 
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 z-50 bg-yellow-400 hover:bg-yellow-500 text-slate-900 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 active:scale-95"
      >
        <i className={`fas ${isChatOpen ? 'fa-times' : 'fa-bolt'} text-2xl`}></i>
      </button>

      {isChatOpen && <ChatBot onClose={() => setIsChatOpen(false)} />}
    </div>
  );
};

export default App;
