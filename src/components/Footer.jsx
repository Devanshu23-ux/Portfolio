import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm text-muted-foreground mb-4">
          &copy; 2025 Devanshu.co All rights reserved
        </p>
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors inline-block"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
