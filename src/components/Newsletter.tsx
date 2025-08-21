import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }
    
    // Subscribe logic would go here
    toast({
      title: "Subscribed!",
      description: "You've been added to our newsletter. Stay tuned for updates!",
    });
    
    setEmail('');
  };
  
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="newsletter-form max-w-2xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-foreground/70 mb-6">
            Subscribe to our newsletter for exclusive GTA VI updates, behind-the-scenes content, and early access opportunities.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
            <Input 
              type="email" 
              placeholder="Your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field flex-grow"
            />
            <Button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </Button>
          </form>
          
          <p className="text-xs text-foreground/60 mt-4">
            By subscribing, you agree to receive marketing emails from Rockstar Games. You can unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
