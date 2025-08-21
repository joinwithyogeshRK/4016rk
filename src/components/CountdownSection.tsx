import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const CountdownSection = () => {
  // Set release date to Fall 2025 (using October 1, 2025 as placeholder)
  const releaseDate = new Date('October 1, 2025').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = releaseDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, [releaseDate]);
  
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/vice-city-skyline.jpg" 
          alt="Vice City Skyline" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Coming Fall 2025</h2>
          <p className="text-xl text-foreground/80 mb-12">
            The next chapter in the Grand Theft Auto series is on its way. Pre-order now to secure your copy and exclusive bonuses.
          </p>
          
          <div className="flex justify-center space-x-4 mb-12">
            <div className="countdown-item w-20">
              <div className="text-3xl md:text-4xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</div>
              <div className="text-xs text-foreground/70">Days</div>
            </div>
            <div className="countdown-item w-20">
              <div className="text-3xl md:text-4xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="text-xs text-foreground/70">Hours</div>
            </div>
            <div className="countdown-item w-20">
              <div className="text-3xl md:text-4xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="text-xs text-foreground/70">Minutes</div>
            </div>
            <div className="countdown-item w-20">
              <div className="text-3xl md:text-4xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="text-xs text-foreground/70">Seconds</div>
            </div>
          </div>
          
          <Link to="/preorder">
            <Button className="btn-primary text-lg px-8 py-6">
              Pre-order Now
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownSection;
