import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { characters } from '@/data/characters';
import { motion } from 'framer-motion';

const CharacterShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const featuredCharacters = characters.slice(0, 3);
  
  return (
    <section className="py-24 bg-gradient-to-b from-background to-surface">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">Meet the Characters</h2>
          <Link to="/characters">
            <Button variant="ghost" className="text-foreground/70 hover:text-primary inline-flex items-center">
              View All Characters
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCharacters.map((character, index) => (
            <motion.div 
              key={character.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group character-card"
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={character.image} 
                  alt={character.name} 
                  className="w-full h-80 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-foreground text-sm">{character.description}</p>
                </div>
              </div>
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{character.name}</h3>
              <p className="text-foreground/70">{character.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharacterShowcase;
