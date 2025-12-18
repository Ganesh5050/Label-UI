import { Code, Palette, Zap, Box, Smartphone, Layout } from 'lucide-react';

export default function ComponentShowcase() {
  const features = [
    {
      icon: Code,
      title: 'Copy & Paste',
      description: 'Components are yours to customize. No installation needed.',
    },
    {
      icon: Palette,
      title: 'Customizable',
      description: 'Built with Nativewind. Style with Tailwind CSS utility classes.',
    },
    {
      icon: Zap,
      title: 'Accessible',
      description: 'WAI-ARIA compliant. Keyboard navigation and screen reader support.',
    },
    {
      icon: Box,
      title: 'Open Source',
      description: 'Free to use. MIT licensed. Contribute on GitHub.',
    },
    {
      icon: Smartphone,
      title: 'Universal',
      description: 'Works on iOS, Android, and Web with the same codebase.',
    },
    {
      icon: Layout,
      title: 'Blocks',
      description: 'Pre-built page sections and patterns to speed up development.',
    },
  ];

  return (
    <div className="w-full px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-[10px] bg-card p-6 shadow-premium-white hover:scale-[1.02] transition-all duration-300 border-none"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-[10px] bg-primary/10 shadow-sm">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
