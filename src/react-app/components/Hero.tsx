import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center gap-4 py-12 text-center md:pt-20 lg:pt-24 xl:gap-6 px-4">
      {/* Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 -bottom-20 z-[-1] bg-white opacity-50 dark:bg-neutral-900 dark:opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 60% 100% at 50% 100%, black, transparent)',
        }}
      />

      {/* Badge */}
      <a
        href="/docs/blocks/authentication"
        className="group inline-flex"
      >
        <Badge
          variant="outline"
          className="px-3 py-1 text-xs font-normal rounded-full hover:bg-accent transition-all cursor-pointer"
        >
          <span className="inline-flex items-center gap-1.5">
            New Authentication Blocks
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Badge>
      </a>

      {/* Main Heading */}
      <h1 className="max-w-4xl text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
        Build your Universal Component Library
      </h1>

      {/* Subtitle */}
      <p className="max-w-2xl text-balance text-base text-muted-foreground sm:text-lg md:text-xl">
        Beautiful, accessible, and customizable UI components. Open source and{' '}
        <i>easy to use.</i>
      </p>

      {/* CTA Button */}
      <div className="flex w-full items-center justify-center gap-3 pt-4">
        <Button
          asChild
          size="lg"
          className="shadow-premium-black rounded-[10px] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
        >
          <a href="/docs" className="flex items-center">
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </div>
    </div>
  );
}
