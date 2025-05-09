import { motion } from 'framer-motion';
import { Home, Building2, Shield, Heart, Quote, Sun } from 'lucide-react';

const Testimonials = () => {
  const features = [
    {
      icon: <Home className="w-12 h-12 text-accent" />,
      title: <span><span className="text-white">Imóveis</span> <span className="text-accent">Exclusivos</span></span>,
      description: 'Seleção criteriosa das melhores propriedades do mercado.'
    },
    {
      icon: <Building2 className="w-12 h-12 text-accent" />,
      title: <span><span className="text-white">Localização</span> <span className="text-accent">Premium</span></span>,
      description: 'Propriedades em áreas nobres e valorizadas.'
    },
    {
      icon: <Shield className="w-12 h-12 text-accent" />,
      title: <span><span className="text-white">Segurança</span> <span className="text-accent">Garantida</span></span>,
      description: 'Processo seguro e transparente em todas as etapas.'
    },
    {
      icon: <Heart className="w-12 h-12 text-accent" />,
      title: <span><span className="text-white">Atendimento</span> <span className="text-accent">Personalizado</span></span>,
      description: 'Dedicação total para encontrar o imóvel ideal para você.'
    }
  ];

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Efeitos de luz */}
      <div className="absolute top-0 left-1/4 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-20">
        <Sun className="w-12 h-12 text-accent/40 animate-pulse" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="h-1 w-20 bg-accent rounded-full mb-2 mx-auto"></div>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-white">
              Por que Escolher a Patricia
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full mt-2 mx-auto"></div>
          </div>
          <p className="text-secondary/90 max-w-3xl mx-auto">
            Com mais de anos de experiência no mercado imobiliário, 
            ofereço um serviço exclusivo e personalizado para cada cliente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 transition-all duration-300 group-hover:bg-white/15 group-hover:-translate-y-1 group-hover:shadow-lg shadow-md h-full flex flex-col items-center justify-center">
                <div className="bg-primary-light inline-flex rounded-full p-3 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif mb-4 text-center">{feature.title}</h3>
                <p className="text-white/80 text-center">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 relative"
        >
          <div className="max-w-3xl mx-auto bg-white/15 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-10 text-center relative shadow-xl">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-accent rounded-full p-3 shadow-lg">
              <Quote className="w-6 h-6 text-white" />
            </div>
            <p className="text-xl font-serif italic text-white mb-8">
              "Meu compromisso é transformar sonhos em realidade, oferecendo não apenas 
              imóveis excepcionais, mas uma experiência completa de consultoria imobiliária."
            </p>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <p className="font-medium text-white">Patricia</p>
                <p className="text-accent">Consultora Imobiliária</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;