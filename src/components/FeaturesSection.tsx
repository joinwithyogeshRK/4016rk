import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { features } from '@/data/features';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const highlightedFeatures = features.slice(0, 3);
  
  return (
    <section className="py-24 bg-gradient-to-b from-surface to-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">Game Features</h2>
          <Link to="/features">
            <Button variant="ghost" className="text-foreground/70 hover:text-primary inline-flex items-center">
              View All Features
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlightedFeatures.map((feature, index) => (
            <motion.div 
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="feature-card group"
            >
              <div className="text-accent text-3xl mb-3">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
