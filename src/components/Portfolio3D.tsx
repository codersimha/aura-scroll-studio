import { useEffect, useRef, useState } from "react";
import { PortfolioCard } from "./PortfolioCard";
import { motion } from "framer-motion";

const portfolioData = [
  {
    title: "CREATIVE",
    subtitle: "Design",
    description: "Crafting stunning visual experiences that captivate and inspire. From concept to execution, every pixel matters.",
  },
  {
    title: "DEVELOP",
    subtitle: "Code",
    description: "Building robust, scalable solutions with cutting-edge technology. Clean code, powerful results.",
  },
  {
    title: "INNOVATE",
    subtitle: "Ideas",
    description: "Pushing boundaries and exploring new possibilities. Where imagination meets implementation.",
  },
  {
    title: "DELIVER",
    subtitle: "Results",
    description: "Transforming visions into reality with precision and passion. Excellence in every detail.",
  },
  {
    title: "CONNECT",
    subtitle: "Collaborate",
    description: "Let's work together to create something extraordinary. Your project deserves the best.",
  },
];

export const Portfolio3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const progress = scrollTop / scrollHeight;
      
      setScrollProgress(progress);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
      style={{
        perspective: "1500px",
        perspectiveOrigin: "center center",
      }}
    >
      {/* Hero Section */}
      <motion.div 
        className="relative w-full h-screen flex items-center justify-center snap-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-8xl md:text-9xl font-bold mb-6 glow-text">
              PORTFOLIO
            </h1>
            <p className="text-2xl text-foreground/60 mb-12">
              Scroll to explore
            </p>
          </motion.div>
          
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="w-1.5 h-2 bg-primary rounded-full" />
          </motion.div>
        </div>

        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </motion.div>

      {/* 3D Cards Section */}
      <div className="relative w-full h-[400vh]">
        <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
          <div 
            className="relative w-full h-full"
            style={{
              transformStyle: "preserve-3d",
              perspective: "1500px",
            }}
          >
            {portfolioData.map((card, index) => (
              <PortfolioCard
                key={index}
                {...card}
                index={index}
                scrollProgress={scrollProgress}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <motion.div 
        className="relative w-full h-screen flex items-center justify-center snap-start"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center z-10">
          <h2 className="text-7xl md:text-8xl font-bold mb-6 glow-text">
            GET IN TOUCH
          </h2>
          <p className="text-xl text-foreground/60 mb-12 max-w-2xl mx-auto px-6">
            Ready to bring your vision to life? Let's create something amazing together.
          </p>
          <button className="px-12 py-4 bg-primary text-primary-foreground rounded-full text-lg font-semibold hover:scale-110 transition-transform duration-300 animate-glow">
            Start a Project
          </button>
        </div>
      </motion.div>
    </div>
  );
};
