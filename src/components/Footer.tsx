import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-dark border-t border-dark-foreground/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dark-foreground/70 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Ankit Chhabilal Bharti. All rights reserved.
          </p>
          
          <p className="flex items-center gap-2 text-dark-foreground/70 text-sm">
            Built with <Heart className="h-4 w-4 text-gold fill-gold" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
