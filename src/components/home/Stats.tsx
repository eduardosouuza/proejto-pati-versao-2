import { motion } from 'framer-motion';
import { Sun, CheckCircle } from 'lucide-react';

const Stats = () => {
  const stats = [
    { value: '100%', label: 'Comprometimento', icon: <CheckCircle className="text-accent" size={20} /> },
    { value: '90+', label: 'Clientes Satisfeitos', icon: <CheckCircle className="text-accent" size={20} /> },
    { value: '5+', label: 'Anos de Experiência', icon: <CheckCircle className="text-accent" size={20} /> },
    { value: '98%', label: 'Satisfação dos Clientes', icon: <CheckCircle className="text-accent" size={20} /> },
  ];

  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0"></div>
      <div className="absolute -right-10 top-20 rotate-15">
        <Sun className="text-accent/20 w-32 h-32" />
      </div>
      <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-primary/5 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center relative group"
            >
              <div className="p-8 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 border border-accent/5">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 h-1 w-12 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {stat.icon}
                </div>
                <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <p className="text-accent text-2xl font-serif font-medium">{stat.value}</p>
                </div>
                <p className="text-primary font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mt-16"
        >
          <div className="p-6 bg-primary/5 rounded-xl">
            <p className="text-lg text-primary/80 italic">
              "Nossa missão é encontrar o imóvel perfeito para você, com toda a clareza e transparência que você merece."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;