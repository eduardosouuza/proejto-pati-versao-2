import { ArrowRight, Search, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Property } from '../../types/property';
import { supabase } from '../../lib/supabase';

const Hero = () => {
  const [featuredProperty, setFeaturedProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProperty = async () => {
      try {
        const { data, error } = await supabase
          .from('properties')
          .select('*')
          .eq('featured', true)
          .eq('status', 'available')
          .order('price', { ascending: false })
          .limit(1)
          .single();

        if (error) {
          console.error('Erro ao buscar imóvel em destaque:', error);
        } else if (data) {
          setFeaturedProperty(data);
        }
      } catch (error) {
        console.error('Erro ao buscar imóvel em destaque:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProperty();
  }, []);

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    });
  };

  return (
    <div className="relative h-screen-90 flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-primary">
        <img 
          src="images/chave-de-mao.jpg" 
          alt="Casa de Luxo" 
          className="w-full h-full object-cover brightness-110 scale-105 object-[37%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Círculos decorativos com movimento */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 0.3 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-1/3 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
      ></motion.div>
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 0.2 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-1/3 left-10 w-80 h-80 bg-white/20 rounded-full blur-3xl"
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mb-12 lg:mb-0"
          >
            <div className="text-white mb-2 inline-block px-4 py-1.5 bg-accent/80 backdrop-blur-sm rounded-full">
              <span className="text-sm font-display font-medium tracking-wide uppercase">Encontre o lar perfeito para sua família</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
              Descubra seu <br/>
              <span className="text-accent relative font-display font-bold">
                Imóvel dos Sonhos
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 1 }}
                  className="absolute -bottom-2 left-0 h-1 bg-accent/50 rounded-full"
                ></motion.span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed font-sans font-light">
              Conectamos você aos melhores imóveis do mercado, com atendimento personalizado e exclusivo para realizar seu sonho.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/properties" 
                className="bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-lg flex items-center justify-center sm:justify-start transition-all duration-300 shadow-lg hover:shadow-xl group font-display font-medium tracking-wide"
              >
                <Search size={18} className="mr-2" />
                Buscar Imóveis
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link 
                to="/contact" 
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg flex items-center justify-center sm:justify-start transition-all duration-300 border border-white/40 backdrop-blur-sm font-display font-medium tracking-wide"
              >
                <Home size={18} className="mr-2" />
                Falar com Corretor
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            {!loading && featuredProperty && (
              <div className="relative">
                <div className="absolute -left-6 -top-6 w-full h-full border-2 border-accent/30 rounded-3xl"></div>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-2xl">
                  <div className="relative w-72 h-80 overflow-hidden rounded-xl">
                    <img 
                      src={featuredProperty.image || 'images/casa2.jpg'} 
                      alt={featuredProperty.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'images/casa2.jpg';
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <div className="text-white font-sans font-medium">
                        {featuredProperty.title}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="text-white">
                      <div className="text-sm text-white/80 font-sans">A partir de</div>
                      <div className="text-xl text-accent font-display font-semibold">
                        {formatPrice(featuredProperty.price)}
                      </div>
                    </div>
                    <Link 
                      to={`/properties/${featuredProperty.id}`}
                      className="bg-accent/20 hover:bg-accent/30 text-accent text-sm px-4 py-2 rounded-lg transition-colors font-display"
                    >
                      Ver detalhes
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex space-x-3">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="w-2 h-2 bg-white rounded-full"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="w-2 h-2 bg-accent rounded-full"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="w-2 h-2 bg-white rounded-full"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="w-2 h-2 bg-accent rounded-full"
        ></motion.div>
      </div>
    </div>
  );
};

export default Hero;