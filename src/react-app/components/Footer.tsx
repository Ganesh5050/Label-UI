import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router';

const BRAND_TEXT = "LABEL UI";

function AnimatedLetter({ letter, index }: { letter: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <span className="inline-block overflow-hidden" ref={ref}>
      <motion.span
        className="inline-block"
        initial={{ x: '-100%' }}
        animate={isInView ? { x: 0 } : { x: '-100%' }}
        transition={{
          duration: 0.8,
          delay: index * 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    </span>
  );
}

export default function Footer() {
  return (
    <>
      {/* Spacer to allow content to scroll over the fixed footer */}
      <div
        className="h-[500px] relative"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        {/* Fixed footer content */}
        <footer className="fixed bottom-0 left-0 right-0 h-[500px] bg-primary text-primary-foreground">
          <div className="flex flex-col h-full justify-between">
            {/* Top section with links */}
            <div className="pt-12 px-6 sm:px-12 lg:px-24">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
                  {/* Brand */}
                  <Link to="/" className="flex items-center gap-3 group">
                    <img
                      src="/logo.jpeg"
                      alt="Logo"
                      className="w-12 h-12 rounded-full group-hover:scale-105 transition-transform"
                    />
                    <span className="text-xl font-bold">Label UI</span>
                  </Link>

                  {/* Navigation Links */}
                  <nav className="flex flex-wrap items-center gap-6 sm:gap-8">
                    <Link
                      to="/docs"
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      Docs
                    </Link>
                    <a
                      href="https://github.com/Ganesh5050/Label-UI"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      GitHub
                    </a>
                    <Link
                      to="/docs/components/accordion"
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      Components
                    </Link>
                    <Link
                      to="/docs/blocks/authentication/sign-in-form"
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      Blocks
                    </Link>
                  </nav>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-primary-foreground/20">
                  <p className="text-primary-foreground/60 text-sm">
                    A library created with ❤️ by{' '}
                    <a
                      href="https://github.com/Ganesh5050/Label-UI"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground hover:underline"
                    >
                      Label UI
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Big LABEL UI text at bottom */}
            <div className="overflow-hidden pb-8 px-4">
              <div
                className="text-center font-bold text-primary-foreground/10 select-none whitespace-nowrap"
                style={{
                  fontSize: 'clamp(60px, 18vw, 350px)',
                  lineHeight: 1,
                }}
              >
                {BRAND_TEXT.split('').map((letter, index) => (
                  <AnimatedLetter key={index} letter={letter} index={index} />
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
