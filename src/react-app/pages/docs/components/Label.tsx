import { Label } from '@/react-app/components/ui/label';
import { Checkbox } from '@/react-app/components/ui/checkbox';
import { Input } from '@/react-app/components/ui/input';
import ComponentPreview from '@/react-app/components/ComponentPreview';
import CodeBlock from '@/react-app/components/CodeBlock';

export default function LabelDoc() {
  const basicUsageCode = `import { Label } from '~/components/ui/label';

export default function Screen() {
  return (
    <div>
      <Label htmlFor="email">Your email address</Label>
    </div>
  );
}`;

  const withCheckboxCode = `import { Label } from '~/components/ui/label';
import { Checkbox } from '~/components/ui/checkbox';

<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`;

  const withInputCode = `import { Label } from '~/components/ui/label';
import { Input } from '~/components/ui/input';

<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email" />
</div>`;

  const withDisabledCode = `import { Label } from '~/components/ui/label';
import { Input } from '~/components/ui/input';

<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email-disabled" className="opacity-70">Email</Label>
  <Input type="email" id="email-disabled" disabled placeholder="Email" />
</div>`;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Label</h1>
        <p className="text-lg text-muted-foreground">
          Renders an accessible label associated with controls.
        </p>
      </div>

      <div className="flex gap-2">
        <a
          href="https://www.radix-ui.com/primitives/docs/components/label"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-md border border-border hover:bg-accent"
        >
          Docs ↗
        </a>
        <a
          href="https://www.radix-ui.com/primitives/docs/components/label#api-reference"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-md border border-border hover:bg-accent"
        >
          API Reference ↗
        </a>
      </div>

      {/* Preview Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        
        <ComponentPreview
          preview={
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
          }
          code={basicUsageCode}
        />
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        
        <CodeBlock 
          code="npx @react-native-reusables/cli@latest add label" 
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
          <h3 className="text-xl font-semibold tracking-tight">With Checkbox</h3>
          <ComponentPreview
            preview={
              <div className="flex items-center space-x-2">
                <Checkbox id="terms2" />
                <Label htmlFor="terms2">Accept terms and conditions</Label>
              </div>
            }
            code={withCheckboxCode}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">With Input</h3>
          <ComponentPreview
            preview={
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" />
              </div>
            }
            code={withInputCode}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">With Disabled Input</h3>
          <p className="text-sm text-muted-foreground">
            Label styling when associated with a disabled input.
          </p>
          <ComponentPreview
            preview={
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email-disabled" className="opacity-70">Email</Label>
                <Input type="email" id="email-disabled" disabled placeholder="Email" />
              </div>
            }
            code={withDisabledCode}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">Multiple Labels</h3>
          <p className="text-sm text-muted-foreground">
            Group of labeled inputs in a form layout.
          </p>
          <ComponentPreview
            preview={
              <div className="grid w-full max-w-sm gap-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input type="text" id="name" placeholder="Your name" />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="email2">Email</Label>
                  <Input type="email" id="email2" placeholder="Your email" />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Input type="text" id="message" placeholder="Your message" />
                </div>
              </div>
            }
            code={`<div className="grid w-full max-w-sm gap-4">
  <div className="grid w-full items-center gap-1.5">
    <Label htmlFor="name">Name</Label>
    <Input type="text" id="name" placeholder="Your name" />
  </div>
  <div className="grid w-full items-center gap-1.5">
    <Label htmlFor="email">Email</Label>
    <Input type="email" id="email" placeholder="Your email" />
  </div>
  <div className="grid w-full items-center gap-1.5">
    <Label htmlFor="message">Message</Label>
    <Input type="text" id="message" placeholder="Your message" />
  </div>
</div>`}
          />
        </div>
      </div>
    </div>
  );
}
