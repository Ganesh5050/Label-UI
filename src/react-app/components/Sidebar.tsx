import { ChevronRight, BookOpen, Package, Blocks, Info } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router';

interface SidebarSection {
  title: string;
  items: { label: string; href: string; }[];
}

interface SidebarGroup {
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  items?: { label: string; href: string; }[];
  sections?: SidebarSection[];
  expandable?: boolean;
}

export default function Sidebar() {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>(['Authentication', 'All Components']);

  const toggleSection = (title: string) => {
    setExpandedSections(prev =>
      prev.includes(title) ? prev.filter(s => s !== title) : [...prev, title]
    );
  };

  const sidebarGroups: SidebarGroup[] = [
    {
      title: 'Getting started',
      icon: BookOpen,
      items: [
        { label: 'Introduction', href: '/docs' },
        { label: 'Installation', href: '/docs/installation' },
        { label: 'Customization', href: '/docs/customization' },
        { label: 'CLI', href: '/docs/cli' },
        { label: 'Changelog', href: '/docs/changelog' },
      ],
    },
    {
      title: 'Blocks',
      icon: Blocks,
      expandable: true,
      sections: [
        {
          title: 'Authentication',
          items: [
            { label: 'Sign in form', href: '/docs/blocks/authentication/sign-in-form' },
            { label: 'Sign up form', href: '/docs/blocks/authentication/sign-up-form' },
            { label: 'Verify email form', href: '/docs/blocks/authentication/verify-email-form' },
            { label: 'Reset password form', href: '/docs/blocks/authentication/reset-password-form' },
            { label: 'Forgot password form', href: '/docs/blocks/authentication/forgot-password-form' },
            { label: 'Social connections', href: '/docs/blocks/authentication/social-connections' },
            { label: 'User menu', href: '/docs/blocks/authentication/user-menu' },
          ],
        },
      ],
    },
    {
      title: 'Components',
      icon: Package,
      expandable: true,
      sections: [
        {
          title: 'All Components',
          items: [
            { label: 'Accordion', href: '/docs/components/accordion' },
            { label: 'Alert', href: '/docs/components/alert' },
            { label: 'Alert Dialog', href: '/docs/components/alert-dialog' },
            { label: 'Aspect Ratio', href: '/docs/components/aspect-ratio' },
            { label: 'Avatar', href: '/docs/components/avatar' },
            { label: 'Badge', href: '/docs/components/badge' },
            { label: 'Button', href: '/docs/components/button' },
            { label: 'Card', href: '/docs/components/card' },
            { label: 'Checkbox', href: '/docs/components/checkbox' },
            { label: 'Collapsible', href: '/docs/components/collapsible' },
            { label: 'Context Menu', href: '/docs/components/context-menu' },
            { label: 'Dialog', href: '/docs/components/dialog' },
            { label: 'Dropdown Menu', href: '/docs/components/dropdown-menu' },
            { label: 'Form', href: '/docs/components/form' },
            { label: 'Hover Card', href: '/docs/components/hover-card' },
            { label: 'Input', href: '/docs/components/input' },
            { label: 'Label', href: '/docs/components/label' },
            { label: 'Menubar', href: '/docs/components/menubar' },
            { label: 'Navigation Menu', href: '/docs/components/navigation-menu' },
            { label: 'Popover', href: '/docs/components/popover' },
            { label: 'Progress', href: '/docs/components/progress' },
            { label: 'Radio Group', href: '/docs/components/radio-group' },
            { label: 'Select', href: '/docs/components/select' },
            { label: 'Separator', href: '/docs/components/separator' },
            { label: 'Skeleton', href: '/docs/components/skeleton' },
            { label: 'Slider', href: '/docs/components/slider' },
            { label: 'Switch', href: '/docs/components/switch' },
            { label: 'Table', href: '/docs/components/table' },
            { label: 'Tabs', href: '/docs/components/tabs' },
            { label: 'Text', href: '/docs/components/text' },
            { label: 'Textarea', href: '/docs/components/textarea' },
            { label: 'Toast', href: '/docs/components/toast' },
            { label: 'Toggle', href: '/docs/components/toggle' },
            { label: 'Toggle Group', href: '/docs/components/toggle-group' },
            { label: 'Tooltip', href: '/docs/components/tooltip' },
          ],
        },
      ],
    },
    {
      title: 'About us',
      icon: Info,
      items: [
        { label: 'Label UI', href: '/docs/about' },
      ],
    },
  ];

  return (
    <aside className="fixed top-32 left-4 z-30 h-[calc(100vh-9rem)] w-64 overflow-y-auto rounded-xl border border-border bg-background shadow-sm">
      <div className="py-6 px-4">
        {sidebarGroups.map((group) => (
          <div key={group.title} className="mb-6">
            {(group.items || !group.sections) && (
              <div className="mb-2 px-2 text-xs font-semibold tracking-wide text-black uppercase">
                {group.title}
              </div>
            )}

            {group.items && (
              <div className="space-y-1">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors ${location.pathname === item.href
                      ? 'bg-secondary text-black font-medium'
                      : 'text-black hover:bg-accent'
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            {group.sections && group.sections.map((section) => (
              <div key={section.title} className="mt-2">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm font-medium text-black hover:bg-accent transition-colors"
                >
                  {section.title}
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${expandedSections.includes(section.title) ? 'rotate-90' : ''
                      }`}
                  />
                </button>

                {expandedSections.includes(section.title) && (
                  <div className="mt-1 space-y-1 pl-4">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={`block rounded-md px-2 py-1.5 text-sm transition-colors ${location.pathname === item.href
                          ? 'bg-secondary text-black font-medium'
                          : 'text-black hover:bg-accent'
                          }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}
