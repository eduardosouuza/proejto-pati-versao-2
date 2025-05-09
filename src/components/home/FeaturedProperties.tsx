import { useState, useEffect } from 'react';
import { ArrowRight, Home, Filter, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Property } from '../../types/property';
import PropertyCard from '../properties/PropertyCard';
import { supabase } from '../../lib/supabase';
import toast from 'react-hot-toast';

const FeaturedProperties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    fetchFeaturedProperties();
  }, []);

  const fetchFeaturedProperties = async () => {
    try {
      // Primeiro, obter o número total de imóveis em destaque
      const { count, error: countError } = await supabase
        .from('properties')
        .select('*', { count: 'exact', head: true })
        .eq('featured', true)
        .eq('status', 'available');
      
      if (countError) throw countError;
      setTotalCount(count || 0);
      
      // Agora, buscar todos os imóveis em destaque (sem limite)
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('featured', true)
        .eq('status', 'available')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProperties(data || []);
    } catch (error) {
      console.error('Erro ao carregar imóveis em destaque:', error);
      toast.error('Falha ao carregar imóveis em destaque');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="loader"></div>
      </div>
    );
  }

  if (properties.length === 0) {
    return null;
  }

  const priceRange = properties.length > 0 
    ? {
        min: Math.min(...properties.map(p => p.price)),
        max: Math.max(...properties.map(p => p.price))
      }
    : { min: 0, max: 0 };

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    });
  };

  // Determinar quais propriedades mostrar (todas ou apenas as primeiras 6)
  const displayProperties = showAll ? properties : properties.slice(0, 6);
  const hasMoreProperties = properties.length > 6;

  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 rounded-full border-8 border-primary/5"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border-8 border-accent/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative mb-6"
            >
              <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-3 h-12 bg-accent rounded-r-md"></div>
              <h2 className="section-title">Imóveis em Destaque</h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-primary/80 max-w-2xl leading-relaxed"
            >
              Descubra nossa seleção exclusiva de {totalCount} propriedades extraordinárias em destaque 
              {properties.length > 0 && (
                <>
                  {' '}com valores entre{' '}
                  <span className="text-accent font-medium">{formatPrice(priceRange.min)}</span> e{' '}
                  <span className="text-accent font-medium">{formatPrice(priceRange.max)}</span>
                </>
              )}.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-0"
          >
            <Link to="/properties" className="flex items-center bg-accent/10 hover:bg-accent/20 text-accent rounded-md px-5 py-3 transition-colors group shadow-sm font-medium tracking-wide">
              <Filter size={18} className="mr-2" />
              <span>Ver Todos os Imóveis</span>
              <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>

        {/* Botão para ver mais imóveis (se existirem mais de 6) */}
        {hasMoreProperties && !showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center px-6 py-3 bg-accent/10 hover:bg-accent/20 text-accent rounded-md transition-colors group shadow-sm font-medium tracking-wide"
            >
              <span>Ver Mais Imóveis em Destaque</span>
              <ChevronRight size={18} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a 
            href="https://wa.me/5551991861221" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white px-6 py-4 rounded-lg shadow-md border border-accent/20 text-primary hover:bg-accent hover:text-white transition-all duration-300 group font-medium tracking-wide"
          >
            <Home className="mr-2" size={20} />
            <span>Não encontrou o que procura? Fale conosco</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;