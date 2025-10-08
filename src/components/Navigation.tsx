import { motion } from "framer-motion";
import { Home, User, Briefcase, Award, Mail, FolderOpen } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Work", href: "#work", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "Certifications", href: "#certifications", icon: Award },
  { name: "Contact", href: "#contact", icon: Mail },
];

export const Navigation = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-card/40 backdrop-blur-xl border border-primary/20 rounded-full px-8 py-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <ul className="flex gap-8 items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          
          return (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="group relative flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors duration-300"
              >
                <Icon size={18} />
                <span className="text-sm font-medium hidden md:inline">
                  {item.name}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
};
