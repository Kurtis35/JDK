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
          "group relative h-full bg-card/50 border border-white/5 rounded-2xl p-8 transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 cursor-pointer overflow-hidden",
          className
        )}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-6 p-4 rounded-xl bg-primary/10 w-fit text-primary border border-primary/20 group-hover:shadow-[0_0_20px_-5px_rgba(0,191,255,0.4)] transition-shadow">
            <Icon className="h-8 w-8" />
          </div>
          
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
            {description}
          </p>
          
          <div className="flex items-center text-sm font-semibold text-primary/80 group-hover:text-primary transition-colors">
            Learn More <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
