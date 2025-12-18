import { Badge } from '@/react-app/components/ui/badge';
import ComponentPreview from '@/react-app/components/ComponentPreview';
import CodeBlock from '@/react-app/components/CodeBlock';

export default function BadgeDoc() {
  const basicUsageCode = `import { Badge } from '~/components/ui/badge';

export default function Screen() {
  return <Badge>Badge</Badge>;
}`;

  const variantsCode = `<div className="flex flex-wrap items-center gap-3">
  <Badge variant="default">Default</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="destructive">Destructive</Badge>
  <Badge variant="outline">Outline</Badge>
</div>`;

  const withIconsCode = `import { Badge } from '~/components/ui/badge';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

<div className="flex flex-wrap items-center gap-3">
  <Badge variant="default" className="gap-1">
    <CheckCircle className="h-3 w-3" />
    Verified
  </Badge>
  
  <Badge variant="destructive" className="gap-1">
    <XCircle className="h-3 w-3" />
    Error
  </Badge>
  
  <Badge variant="outline" className="gap-1">
    <AlertCircle className="h-3 w-3" />
    Warning
  </Badge>
</div>`;

  const countersCode = `<div className="flex flex-wrap items-center gap-3">
  <Badge variant="secondary">New 8</Badge>
  <Badge variant="destructive">Errors 3</Badge>
  <Badge variant="outline">Pending 12</Badge>
</div>`;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Badge</h1>
        <p className="text-lg text-muted-foreground">
          Displays a badge or a component that looks like a badge.
        </p>
      </div>

      {/* Preview Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        
        <ComponentPreview
          preview={<Badge>Badge</Badge>}
          code={basicUsageCode}
        />
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        
        <CodeBlock 
          code="npx @react-native-reusables/cli@latest add badge" 
          language="bash"
          title="CLI"
        />
      </div>

      {/* Usage */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        
        <CodeBlock code={basicUsageCode} />
      </div>

      {/* Examples */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Examples</h2>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">Variants</h3>
          <ComponentPreview
            preview={
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            }
            code={variantsCode}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">With Icons</h3>
          <p className="text-sm text-muted-foreground">
            Badges can include icons for better visual communication.
          </p>
          <ComponentPreview
            preview={
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="default" className="gap-1">
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  Verified
                </Badge>
                
                <Badge variant="destructive" className="gap-1">
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                  Error
                </Badge>
                
                <Badge variant="outline" className="gap-1">
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  Warning
                </Badge>
              </div>
            }
            code={withIconsCode}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">Counters</h3>
          <p className="text-sm text-muted-foreground">
            Use badges to display counts and status indicators.
          </p>
          <ComponentPreview
            preview={
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="secondary">New 8</Badge>
                <Badge variant="destructive">Errors 3</Badge>
                <Badge variant="outline">Pending 12</Badge>
                <Badge variant="default">99+</Badge>
              </div>
            }
            code={countersCode}
          />
        </div>
      </div>
    </div>
  );
}
