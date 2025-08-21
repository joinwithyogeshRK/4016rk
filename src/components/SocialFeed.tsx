import { motion } from 'framer-motion';
import { Twitter, Instagram, Facebook } from 'lucide-react';

const socialPosts = [
  {
    id: 1,
    platform: 'twitter',
    username: '@RockstarGames',
    avatar: '/images/rockstar-logo.jpg',
    content: "Grand Theft Auto VI. Coming Fall 2025. Watch the trailer now on our website.",
    timeAgo: '2 days ago'
  },
  {
    id: 2,
    platform: 'instagram',
    username: '@rockstargames',
    avatar: '/images/rockstar-logo.jpg',
    content: "Vice City. A place of excess and opportunity. #GTAVI",
    timeAgo: '1 day ago'
  },
  {
    id: 3,
    platform: 'facebook',
    username: 'Rockstar Games',
    avatar: '/images/rockstar-logo.jpg',
    content: "The wait is almost over. Pre-orders for GTA VI are now open. Secure your copy today.",
    timeAgo: '5 hours ago'
  }
];

const SocialFeed = () => {
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'twitter':
        return <Twitter className="h-4 w-4 text-[#1DA1F2]" />;
      case 'instagram':
        return <Instagram className="h-4 w-4 text-[#E1306C]" />;
      case 'facebook':
        return <Facebook className="h-4 w-4 text-[#4267B2]" />;
      default:
        return null;
    }
  };
  
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Latest Updates</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {socialPosts.map((post, index) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="social-card"
            >
              <div className="flex items-center mb-3">
                <img 
                  src={post.avatar} 
                  alt={post.username} 
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div className="text-sm font-bold">{post.username}</div>
                <div className="ml-auto">{getPlatformIcon(post.platform)}</div>
              </div>
              <p className="text-sm mb-3">{post.content}</p>
              <div className="text-xs text-foreground/60">{post.timeAgo}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
