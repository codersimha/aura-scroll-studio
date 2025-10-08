import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { CustomCursor } from "@/components/CustomCursor";
import { Building2, Calendar, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Tech Innovations Inc.",
    role: "Senior Full-Stack Developer",
    period: "2022 - Present",
    description: "Leading development of cutting-edge web applications using React, TypeScript, and Node.js. Architecting scalable solutions and mentoring junior developers.",
    achievements: [
      "Increased application performance by 60%",
      "Led team of 5 developers",
      "Implemented CI/CD pipelines",
    ],
  },
  {
    company: "Creative Digital Studio",
    role: "Frontend Developer & Designer",
    period: "2020 - 2022",
    description: "Specialized in creating visually stunning and highly interactive web experiences. Collaborated closely with design teams to bring creative visions to life.",
    achievements: [
      "Delivered 20+ client projects",
      "Won 3 design awards",
      "Reduced load times by 45%",
    ],
  },
  {
    company: "StartUp Labs",
    role: "Web Developer",
    period: "2018 - 2020",
    description: "Developed responsive websites and web applications for various startups. Worked in fast-paced environment with rapid iteration cycles.",
    achievements: [
      "Built 15+ MVPs from scratch",
      "Implemented A/B testing frameworks",
      "Increased conversion rates by 35%",
    ],
  },
  {
    company: "Freelance",
    role: "Independent Developer",
    period: "2016 - 2018",
    description: "Provided web development and design services to small businesses and startups. Managed entire project lifecycle from concept to deployment.",
    achievements: [
      "Completed 30+ projects",
      "100% client satisfaction rate",
      "Built long-term client relationships",
    ],
  },
];

const Work = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <CustomCursor />
      <Navigation />

      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,hsl(291_83%_71%/0.15),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%,hsl(282_100%_65%/0.1),transparent_50%)]" />
      </div>

      <main className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl md:text-8xl font-bold mb-8 glow-text">
            WORK EXPERIENCE
          </h1>
          <p className="text-2xl text-foreground/60 max-w-3xl mb-16 leading-relaxed">
            A journey through innovation, creativity, and continuous growth in the tech industry.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="group relative bg-card/40 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 md:p-12 hover:border-primary/50 transition-all duration-500"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ scale: 1.01, translateX: 10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="text-primary" size={24} />
                      <h2 className="text-3xl font-bold">{exp.company}</h2>
                    </div>
                    <h3 className="text-xl text-primary/80 font-semibold mb-2">{exp.role}</h3>
                  </div>
                  
                  <div className="flex items-center gap-2 text-foreground/60">
                    <Calendar size={18} />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                </div>

                <p className="text-foreground/70 text-lg mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-primary/80 uppercase tracking-wider mb-3">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-foreground/70">
                        <ExternalLink size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Work;
