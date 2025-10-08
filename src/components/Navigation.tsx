import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Briefcase, Award, Mail, FolderOpen } from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: User },
  { name: "Work", path: "/work", icon: Briefcase },
  { name: "Projects", path: "/projects", icon: FolderOpen },
  { name: "Certifications", path: "/certifications", icon: Award },
  { name: "Contact", path: "/contact", icon: Mail },
];

export const Navigation = () => {
  const location = useLocation();

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
          const isActive = location.pathname === item.path;
          
          return (
            <li key={item.path}>
              <Link
                to={item.path}
                className="group relative flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors duration-300"
              >
                <Icon size={18} className={isActive ? "text-primary" : ""} />
                <span className={`text-sm font-medium ${isActive ? "text-primary" : ""}`}>
                  {item.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
};
