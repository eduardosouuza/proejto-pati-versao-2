import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Home, Lock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-accent/5 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Home className="text-accent" size={24} />
              <span className="text-2xl font-serif font-medium text-white">Patricia</span>
            </div>
            <p className="text-secondary/90 mb-6">
              Especialista em imóveis de alto padrão, oferecendo um serviço exclusivo 
              e personalizado para cada cliente.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook size={18} className="text-accent" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram size={18} className="text-accent" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Linkedin size={18} className="text-accent" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif mb-6 relative pb-3">
              <span className="relative z-10">Contato</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-accent mr-3 mt-1 flex-shrink-0" />
                <span className="text-secondary">
                  Viamão, RS
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-accent mr-3 flex-shrink-0" />
                <span className="text-secondary">(51) 99186-1221</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-accent mr-3 flex-shrink-0" />
                <span className="text-secondary">psimoveis1515@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-serif mb-6 relative pb-3">
              <span className="relative z-10">Links Rápidos</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-secondary hover:text-accent transition-colors flex items-center">
                  <span className="mr-2">›</span> Início
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary hover:text-accent transition-colors flex items-center">
                  <span className="mr-2">›</span> Sobre
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-secondary hover:text-accent transition-colors flex items-center">
                  <span className="mr-2">›</span> Imóveis
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary hover:text-accent transition-colors flex items-center">
                  <span className="mr-2">›</span> Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-serif mb-6 relative pb-3">
              <span className="relative z-10">Serviços</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-secondary">
                <span className="mr-2">›</span> Venda de Imóveis
              </li>
              <li className="flex items-center text-secondary">
                <span className="mr-2">›</span> Imóveis para Investimento
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-secondary/80">
          <p className="mb-3">&copy; {new Date().getFullYear()} Patricia Imóveis. Todos os direitos reservados.</p>
          <Link 
            to="/admin/login" 
            className="inline-flex items-center text-[10px] bg-transparent hover:bg-white/5 text-white/40 hover:text-white/70 px-2 py-1 rounded transition-all duration-300"
          >
            <Lock size={10} className="mr-1" />
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;