import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Instagram, Twitter, Youtube, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ComingSoonHero = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleNotifyMe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You're on the list!",
        description: "We'll notify you when DripYard launches.",
      });
      setEmail('');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      <div className="text-center z-10 max-w-4xl mx-auto">
        {/* Brand Logo */}
        <div className="fade-in-up mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter">
            <span className="brand-gradient">DRIP</span>
            <span className="text-primary">YARD</span>
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mt-4 glow-effect"></div>
        </div>

        {/* Coming Soon */}
        <div className="fade-in-delay mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-muted-foreground mb-4 tracking-wide">
            COMING SOON
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Exclusive streetwear drops for the culture. 
            <br />
            Elevate your style with limited edition pieces.
          </p>
        </div>

        {/* Email Signup */}
        <div className="fade-in-delay mb-12">
          <form onSubmit={handleNotifyMe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={dev.dripyard@gmail.com}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-secondary/50 border-border/50 text-foreground placeholder:text-muted-foreground backdrop-blur-sm"
              required
            />
            <Button 
              type="submit" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 glow-effect"
            >
              <Mail className="w-4 h-4 mr-2" />
              Notify Me
            </Button>
          </form>
        </div>

        {/* Social Links */}
        <div className="fade-in-delay">
          <p className="text-muted-foreground mb-6">Follow the movement</p>
          <div className="flex justify-center gap-6">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-accent transition-colors duration-300 hover:scale-110 transform"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-accent transition-colors duration-300 hover:scale-110 transform"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-accent transition-colors duration-300 hover:scale-110 transform"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ComingSoonHero;