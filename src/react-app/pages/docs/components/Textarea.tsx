import { Textarea } from '@/react-app/components/ui/textarea';
import { Label } from '@/react-app/components/ui/label';
import ComponentPreview from '@/react-app/components/ComponentPreview';
import CodeBlock from '@/react-app/components/CodeBlock';

export default function TextareaDoc() {
  const basicUsageCode = `import { Textarea } from '~/components/ui/textarea';

export default function Screen() {
  return <Textarea placeholder="Type your message here." />;
}`;

  const withLabelCode = `import { Textarea } from '~/components/ui/textarea';
import { Label } from '~/components/ui/label';

export default function Screen() {
  return (
    <div className="space-y-2">
      <Label htmlFor="message">Your message</Label>
      <Textarea id="message" placeholder="Type your message here." />
    </div>
  );
}`;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Textarea</h1>
        <p className="text-lg text-muted-foreground">
          Displays a form textarea or a component that looks like a textarea.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        <ComponentPreview
          preview={<Textarea placeholder="Type your message here." />}
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
              <code className="text-primary">npx @react-native-reusables/cli@latest add textarea</code>
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
          <h3 className="text-xl font-semibold">With Label</h3>
          <ComponentPreview
            preview={
              <div className="grid w-full gap-1.5">
                <Label htmlFor="message">Your message</Label>
                <Textarea id="message" placeholder="Type your message here." />
              </div>
            }
            code={withLabelCode}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Disabled</h3>
          <ComponentPreview
            preview={<Textarea placeholder="Type your message here." disabled />}
            code={basicUsageCode}
          />
        </div>
      </div>
    </div>
  );
}
