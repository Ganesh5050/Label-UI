import { Separator } from '@/react-app/components/ui/separator';
import ComponentPreview from '@/react-app/components/ComponentPreview';
import CodeBlock from '@/react-app/components/CodeBlock';

export default function SeparatorDoc() {
  const basicUsageCode = `import { Separator } from '@/components/ui/separator';

export default function Screen() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  );
}`;

  const verticalCode = `<div className="flex h-5 items-center space-x-4">
  <div>Item 1</div>
  <Separator orientation="vertical" />
  <div>Item 2</div>
  <Separator orientation="vertical" />
  <div>Item 3</div>
</div>`;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Separator</h1>
        <p className="text-lg text-muted-foreground">
          Visually or semantically separates content.
        </p>
      </div>

      <div className="flex gap-2">
        <a
          href="https://www.radix-ui.com/docs/primitives/components/separator"
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
          preview={
            <div className="w-full max-w-md">
              <div className="space-y-1">
                <h4 className="text-sm font-medium">Radix Primitives</h4>
                <p className="text-sm text-muted-foreground">
                  An open-source UI component library.
                </p>
              </div>
              <Separator className="my-4" />
              <div className="flex h-5 items-center space-x-4 text-sm">
                <div>Blog</div>
                <Separator orientation="vertical" />
                <div>Docs</div>
                <Separator orientation="vertical" />
                <div>Source</div>
              </div>
            </div>
          }
          code={basicUsageCode}
        />
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        
        <CodeBlock 
          code="npx @react-native-reusables/cli@latest add separator" 
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
        
        <h3 className="text-xl font-semibold tracking-tight">Horizontal</h3>
        <ComponentPreview
          preview={
            <div className="w-full max-w-md space-y-4">
              <div>Section 1</div>
              <Separator />
              <div>Section 2</div>
              <Separator />
              <div>Section 3</div>
            </div>
          }
          code={`<div>
  <div>Section 1</div>
  <Separator />
  <div>Section 2</div>
  <Separator />
  <div>Section 3</div>
</div>`}
        />
        
        <h3 className="text-xl font-semibold tracking-tight">Vertical</h3>
        <ComponentPreview
          preview={
            <div className="flex h-5 items-center space-x-4 text-sm">
              <div>Item 1</div>
              <Separator orientation="vertical" />
              <div>Item 2</div>
              <Separator orientation="vertical" />
              <div>Item 3</div>
            </div>
          }
          code={verticalCode}
        />
      </div>
    </div>
  );
}
