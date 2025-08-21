import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { locations } from '@/data/locations';
import { motion } from 'framer-motion';

const LocationsPreview = () => {
  const featuredLocations = locations.slice(0, 4);
  
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">Explore Vice City</h2>
          <Link to="/locations">
            <Button variant="ghost" className="text-foreground/70 hover:text-primary inline-flex items-center">
              View All Locations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredLocations.map((location, index) => (
            <motion.div 
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="location-card h-64 md:h-80 group hover:scale-105 transition-all duration-300"
            >
              <img 
                src={location.image} 
                alt={location.name} 
                className="w-full h-full object-cover"
              />
              <div className="location-overlay">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{location.name}</h3>
                <p className="text-foreground/80 text-sm">{location.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsPreview;
