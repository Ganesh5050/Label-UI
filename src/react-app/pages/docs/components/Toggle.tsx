import { Toggle } from '@/react-app/components/ui/toggle';
import { Bold, Italic, Underline } from 'lucide-react';
import ComponentPreview from '@/react-app/components/ComponentPreview';
import CodeBlock from '@/react-app/components/CodeBlock';

export default function ToggleDoc() {
  const basicUsageCode = `import { Toggle } from '~/components/ui/toggle';
import * as React from 'react';

export default function Screen() {
  const [pressed, setPressed] = React.useState(false);

  return (
    <Toggle pressed={pressed} onPressedChange={setPressed}>
      Toggle
    </Toggle>
  );
}`;

  const withIconCode = `import { Toggle } from '~/components/ui/toggle';
import { Bold } from 'lucide-react';
import * as React from 'react';

export default function Screen() {
  return (
    <Toggle aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </Toggle>
  );
}`;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Toggle</h1>
        <p className="text-lg text-muted-foreground">
          A two-state button that can be either on or off.
        </p>
      </div>

      <div className="flex gap-2">
        <a
          href="https://www.radix-ui.com/docs/primitives/components/toggle"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-md border border-border hover:bg-accent"
        >
          Docs ↗
        </a>
        <a
          href="https://www.radix-ui.com/docs/primitives/components/toggle#api-reference"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-md border border-border hover:bg-accent"
        >
          API Reference ↗
        </a>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        <ComponentPreview
          preview={<TogglePreview />}
          code={basicUsageCode}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        
        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/50">
            <span className="text-sm font-medium">CLI</span>
          </div>
          <div className="p-4">
            <pre className="text-sm">
              <code className="text-primary">npx @react-native-reusables/cli@latest add toggle</code>
            </pre>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock code={basicUsageCode} language="tsx" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Examples</h2>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">With Icon</h3>
          <ComponentPreview
            preview={
              <Toggle aria-label="Toggle bold">
                <Bold className="h-4 w-4" />
              </Toggle>
            }
            code={withIconCode}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Outline</h3>
          <ComponentPreview
            preview={
              <Toggle variant="outline" aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
              </Toggle>
            }
            code={basicUsageCode}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Disabled</h3>
          <ComponentPreview
            preview={
              <Toggle disabled aria-label="Toggle underline">
                <Underline className="h-4 w-4" />
              </Toggle>
            }
            code={basicUsageCode}
          />
        </div>
      </div>
    </div>
  );
}

function TogglePreview() {
  return (
    <Toggle aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </Toggle>
  );
}
