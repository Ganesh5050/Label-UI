export default function ComponentsGrid() {
  const components = [
    { name: 'Accordion', href: '/docs/components/accordion' },
    { name: 'Alert', href: '/docs/components/alert' },
    { name: 'Alert Dialog', href: '/docs/components/alert-dialog' },
    { name: 'Avatar', href: '/docs/components/avatar' },
    { name: 'Badge', href: '/docs/components/badge' },
    { name: 'Button', href: '/docs/components/button' },
    { name: 'Card', href: '/docs/components/card' },
    { name: 'Checkbox', href: '/docs/components/checkbox' },
    { name: 'Collapsible', href: '/docs/components/collapsible' },
    { name: 'Context Menu', href: '/docs/components/context-menu' },
    { name: 'Dialog', href: '/docs/components/dialog' },
    { name: 'Dropdown Menu', href: '/docs/components/dropdown-menu' },
    { name: 'Form', href: '/docs/components/form' },
    { name: 'Hover Card', href: '/docs/components/hover-card' },
    { name: 'Input', href: '/docs/components/input' },
    { name: 'Label', href: '/docs/components/label' },
    { name: 'Menubar', href: '/docs/components/menubar' },
    { name: 'Navigation Menu', href: '/docs/components/navigation-menu' },
    { name: 'Popover', href: '/docs/components/popover' },
    { name: 'Progress', href: '/docs/components/progress' },
    { name: 'Radio Group', href: '/docs/components/radio-group' },
    { name: 'Select', href: '/docs/components/select' },
    { name: 'Separator', href: '/docs/components/separator' },
    { name: 'Sheet', href: '/docs/components/sheet' },
    { name: 'Skeleton', href: '/docs/components/skeleton' },
    { name: 'Slider', href: '/docs/components/slider' },
    { name: 'Switch', href: '/docs/components/switch' },
    { name: 'Table', href: '/docs/components/table' },
    { name: 'Tabs', href: '/docs/components/tabs' },
    { name: 'Text', href: '/docs/components/text' },
    { name: 'Textarea', href: '/docs/components/textarea' },
    { name: 'Toast', href: '/docs/components/toast' },
    { name: 'Toggle', href: '/docs/components/toggle' },
    { name: 'Toggle Group', href: '/docs/components/toggle-group' },
    { name: 'Tooltip', href: '/docs/components/tooltip' },
  ];

  return (
    <div className="w-full px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-3">
            Components
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {components.length}+ beautifully designed components built with Radix UI and Nativewind.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {components.map((component, index) => (
            <a
              key={index}
              href={component.href}
              className="group relative flex items-center justify-center rounded-lg border border-border bg-card px-4 py-6 hover:bg-accent hover:border-primary/50 transition-all duration-200"
            >
              <span className="text-sm font-medium text-center">
                {component.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
