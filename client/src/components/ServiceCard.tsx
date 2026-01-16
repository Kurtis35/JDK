import { LucideIcon } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  slug: string;
  className?: string;
}

export function ServiceCard({ title, description, icon: Icon, slug, className }: ServiceCardProps) {
  return (
    <Link href={`/services`}>
      <div 
        className={cn(
          "glow-box group relative h-full bg-secondary/10 border border-white/5 rounded-3xl p-10 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col",
          className
        )}
      >
        {/* Subtle internal glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-8 p-5 rounded-2xl bg-primary/5 w-fit text-primary border border-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
            <Icon className="h-9 w-9" />
          </div>
          
          <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-muted-foreground/90 leading-relaxed mb-8 flex-grow font-light">
            {description}
          </p>
          
          <div className="flex items-center text-sm font-bold tracking-widest uppercase text-primary/70 group-hover:text-primary transition-all duration-300">
            Learn More <span className="ml-3 transition-transform duration-300 group-hover:translate-x-2">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
