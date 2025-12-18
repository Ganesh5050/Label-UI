import { Button } from '@/react-app/components/ui/button';
import ComponentPreview from '@/react-app/components/ComponentPreview';
import CodeBlock from '@/react-app/components/CodeBlock';

export default function ButtonDoc() {
  const basicUsageCode = `import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';

export default function Screen() {
  return (
    <Button>
      <Text>Button</Text>
    </Button>
  );
}`;

  const variantsCode = `<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Button</h1>
        <p className="text-lg text-muted-foreground">
          Displays a button or a component that looks like a button.
        </p>
      </div>

      <div className="flex gap-2">
        <a
          href="https://www.radix-ui.com/docs/primitives/components/button"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-md border border-border hover:bg-accent"
        >
          Docs ↗
        </a>
      </div>

      {/* Preview Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        
        <ComponentPreview
          preview={<Button>Button</Button>}
          code={basicUsageCode}
        />
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        
        <CodeBlock 
          code="npx @react-native-reusables/cli@latest add button" 
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
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Examples</h2>
        
        <h3 className="text-xl font-semibold tracking-tight">Variants</h3>
        <ComponentPreview
          preview={
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          }
          code={variantsCode}
        />
      </div>
    </div>
  );
}
