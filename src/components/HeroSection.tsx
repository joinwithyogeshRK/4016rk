import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showFullVideo, setShowFullVideo] = useState(false);
  
  // Auto-play background video on load
  useEffect(() => {
    const video = document.getElementById('background-video') as HTMLVideoElement;
    if (video) {
      video.play().catch(() => {
        // Auto-play was prevented, do nothing (keep muted state)
      });
      setIsVideoPlaying(true);
    }
  }, []);
  
  const toggleMute = () => {
    const video = document.getElementById('background-video') as HTMLVideoElement;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };
  
  const playFullVideo = () => {
    setShowFullVideo(true);
    const fullVideo = document.getElementById('full-video') as HTMLVideoElement;
    if (fullVideo) {
      fullVideo.play().catch(() => {
        // Handle play error
      });
    }
  };
  
  const closeFullVideo = () => {
    setShowFullVideo(false);
    const fullVideo = document.getElementById('full-video') as HTMLVideoElement;
    if (fullVideo) {
      fullVideo.pause();
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 bg-black">
        <video 
          id="background-video"
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted={isMuted}
          playsInline
        >
          <source src="/videos/gta6-teaser.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-end pb-24 container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 neon-text">GTA VI</h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground/90">
            Welcome to Vice City. Experience the next chapter in the Grand Theft Auto series.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button onClick={playFullVideo} className="btn-primary inline-flex items-center">
              <Play className="mr-2 h-4 w-4" />
              Watch Trailer
            </Button>
            <Link to="/preorder">
              <Button className="btn-accent">Pre-order Now</Button>
            </Link>
          </div>
        </motion.div>
        
        {/* Video Controls */}
        <button 
          onClick={toggleMute} 
          className="absolute bottom-8 right-8 p-2 rounded-full bg-surface/50 backdrop-blur-sm hover:bg-surface/80 transition-colors"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </button>
      </div>
      
      {/* Full Video Modal */}
      {showFullVideo && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <button 
            onClick={closeFullVideo}
            className="absolute top-4 right-4 p-2 text-white hover:text-primary transition-colors"
            aria-label="Close video"
          >
            <X className="h-8 w-8" />
          </button>
          <video 
            id="full-video"
            className="max-w-full max-h-full"
            controls
            autoPlay
          >
            <source src="/videos/gta6-trailer.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
