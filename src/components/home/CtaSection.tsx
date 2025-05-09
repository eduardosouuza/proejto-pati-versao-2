import { ArrowRight, Phone, Home, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CtaSection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Interior de Luxo"
          className="w-full h-full object-cover brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/70 to-primary/50"></div>
      </div>

      {/* Elementos decorativos de luz */}
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute top-10 right-10 hidden lg:block">
        <Sun className="text-accent/50 w-12 h-12 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-10 shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-4 inline-block bg-white/20 p-4 rounded-full">
                <Home className="text-white h-10 w-10" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-white mb-6">
                Pronto para Encontrar seu Imóvel Ideal?
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-white/90 mb-8 text-center"
            >
              Vamos começar uma conversa sobre seus objetivos imobiliários e como podemos ajudá-lo a alcançá-los.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-4 justify-center"
            >
              <Link 
                to="/contact" 
                className="bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-md inline-flex items-center justify-center font-medium transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <Phone className="mr-2" size={20} />
                Agendar uma Consulta
                <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/properties" 
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-md inline-flex items-center justify-center font-medium transition-all duration-300 border border-white/20"
              >
                Ver Propriedades Disponíveis
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 right-10 z-10 hidden lg:block">
        <div className="w-20 h-20 border-2 border-white/20 rounded-full animate-pulse"></div>
      </div>
      <div className="absolute top-20 left-20 z-10 hidden lg:block">
        <div className="w-12 h-12 border-2 border-accent/50 rounded-full"></div>
      </div>
    </section>
  );
};

export default CtaSection;