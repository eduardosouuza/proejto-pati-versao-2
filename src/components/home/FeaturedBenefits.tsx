import { motion } from 'framer-motion';
import { Home, Award, Shield, Clock, Zap } from 'lucide-react';

const FeaturedBenefits = () => {
  const benefits = [
    {
      title: 'Propriedades Exclusivas',
      description: 'Acesso a imóveis que você não encontrará em outros lugares',
      icon: <Home className="text-accent w-6 h-6" />,
      delay: 0,
    },
    {
      title: 'Atendimento Premium',
      description: 'Serviço personalizado para atender todas as suas necessidades',
      icon: <Award className="text-accent w-6 h-6" />,
      delay: 0.1,
    },
    {
      title: 'Transparência Total',
      description: 'Processo claro e honesto do início ao fim',
      icon: <Shield className="text-accent w-6 h-6" />,
      delay: 0.2,
    },
    {
      title: 'Resposta Rápida',
      description: 'Atendimento ágil e eficiente para todas as suas dúvidas',
      icon: <Clock className="text-accent w-6 h-6" />,
      delay: 0.3,
    },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute -left-20 top-0 w-40 h-40 bg-accent/5 rounded-full blur-2xl"></div>
      <div className="absolute -right-20 bottom-0 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-3">
              <span className="text-accent font-display font-medium text-sm px-4 py-1.5 rounded-full bg-accent/10 tracking-wide uppercase">Por que escolher</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary relative mb-2">Vantagens exclusivas</h2>
            <p className="text-primary/70 max-w-2xl mx-auto mt-4 leading-relaxed font-sans">
              Descubra por que tantas famílias confiam em nossos serviços para encontrar o imóvel dos seus sonhos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: benefit.delay }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white border border-secondary-dark/10 rounded-xl p-6 h-full shadow-sm hover:shadow-md transition-all duration-300 group-hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-300 origin-bottom-right rounded-xl"></div>
                  <div className="relative z-10">
                    <div className="rounded-full bg-accent/10 p-3 inline-block mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-display font-semibold text-primary mb-2">{benefit.title}</h3>
                    <p className="text-primary/70 text-sm leading-relaxed font-sans">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-primary/5 rounded-xl p-4 mt-12 flex items-center justify-between"
          >
            <div className="flex items-center">
              <div className="bg-accent/20 p-3 rounded-lg">
                <Zap className="text-accent w-5 h-5" />
              </div>
              <p className="text-primary ml-4 font-display font-medium">
                Atendimento rápido e personalizado para ajudar na sua busca
              </p>
            </div>
            <div className="hidden md:block">
              <a 
                href="https://wa.me/5551984598285" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent-light text-white px-4 py-2 rounded-lg inline-flex items-center transition-colors font-display font-medium tracking-wide"
              >
                <span>Fale Agora</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBenefits; 