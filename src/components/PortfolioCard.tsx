import { motion } from "framer-motion";
import { useRef } from "react";

interface PortfolioCardProps {
  title: string;
  subtitle: string;
  description: string;
  index: number;
  scrollProgress: number;
}

export const PortfolioCard = ({ title, subtitle, description, index, scrollProgress }: PortfolioCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Calculate card position based on scroll
  const cardProgress = Math.max(0, Math.min(1, (scrollProgress - index * 0.15) / 0.2));
  const rotateX = (1 - cardProgress) * 20 - 10;
  const rotateY = Math.sin(cardProgress * Math.PI) * 15;
  const translateZ = cardProgress * 100;
  const opacity = 0.3 + cardProgress * 0.7;
  const scale = 0.8 + cardProgress * 0.2;

  return (
    <motion.div
      ref={cardRef}
      className="absolute w-[90vw] max-w-2xl h-[500px] bg-card/80 backdrop-blur-xl rounded-3xl border border-primary/20 overflow-hidden"
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
        top: "50%",
        left: "50%",
        transform: `
          translate(-50%, -50%)
          translateZ(${translateZ}px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          scale(${scale})
        `,
        opacity,
        boxShadow: `0 0 60px hsl(291 83% 71% / ${cardProgress * 0.4})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      
      <div className="relative h-full p-12 flex flex-col justify-center items-start z-10">
        <motion.span 
          className="text-primary/60 text-sm font-medium uppercase tracking-wider mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: cardProgress, y: 0 }}
        >
          {subtitle}
        </motion.span>
        
        <motion.h2 
          className="text-6xl md:text-7xl font-bold mb-6 glow-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: cardProgress, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {title}
        </motion.h2>
        
        <motion.p 
          className="text-foreground/70 text-lg max-w-md leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: cardProgress * 0.8, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {description}
        </motion.p>

        <div className="absolute bottom-12 right-12 w-24 h-24 rounded-full bg-primary/10 backdrop-blur-md border border-primary/30 flex items-center justify-center">
          <span className="text-primary text-4xl font-bold">{index + 1}</span>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />
    </motion.div>
  );
};
