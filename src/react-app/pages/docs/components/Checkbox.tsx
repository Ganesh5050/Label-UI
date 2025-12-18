import { Checkbox } from '@/react-app/components/ui/checkbox';
import { Label } from '@/react-app/components/ui/label';
import ComponentPreview from '@/react-app/components/ComponentPreview';
import CodeBlock from '@/react-app/components/CodeBlock';

export default function CheckboxDoc() {
  const basicUsageCode = `import { Checkbox } from '~/components/ui/checkbox';

export default function Screen() {
  return <Checkbox />;
}`;

  const withLabelCode = `import { Checkbox } from '~/components/ui/checkbox';
import { Label } from '~/components/ui/label';

export default function Screen() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  );
}`;

  const withTextCode = `import { Checkbox } from '~/components/ui/checkbox';
import { Label } from '~/components/ui/label';

<div className="items-top flex space-x-2">
  <Checkbox id="terms1" />
  <div className="grid gap-1.5 leading-none">
    <Label
      htmlFor="terms1"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Accept terms and conditions
    </Label>
    <p className="text-sm text-muted-foreground">
      You agree to our Terms of Service and Privacy Policy.
    </p>
  </div>
</div>`;

  const disabledCode = `<div className="flex items-center space-x-2">
  <Checkbox id="terms2" disabled />
  <Label
    htmlFor="terms2"
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  >
    Accept terms and conditions
  </Label>
</div>`;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Checkbox</h1>
        <p className="text-lg text-muted-foreground">
          A control that allows the user to toggle between checked and not checked.
        </p>
      </div>

      <div className="flex gap-2">
        <a
          href="https://www.radix-ui.com/primitives/docs/components/checkbox"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-md border border-border hover:bg-accent"
        >
          Docs ↗
        </a>
        <a
          href="https://www.radix-ui.com/primitives/docs/components/checkbox#api-reference"
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
          code="npx @react-native-reusables/cli@latest add checkbox" 
          language="bash"
          title="CLI"
        />
      </div>

      {/* Usage */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        
        <CodeBlock code={withLabelCode} />
      </div>

      {/* Examples */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Examples</h2>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">With Text</h3>
          <p className="text-sm text-muted-foreground">
            Checkbox with label and description text.
          </p>
          <ComponentPreview
            preview={
              <div className="items-top flex space-x-2">
                <Checkbox id="terms1" />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor="terms1"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept terms and conditions
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    You agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </div>
            }
            code={withTextCode}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">Disabled</h3>
          <p className="text-sm text-muted-foreground">
            Checkbox in disabled state.
          </p>
          <ComponentPreview
            preview={
              <div className="flex items-center space-x-2">
                <Checkbox id="terms2" disabled />
                <Label
                  htmlFor="terms2"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </Label>
              </div>
            }
            code={disabledCode}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">Multiple Checkboxes</h3>
          <p className="text-sm text-muted-foreground">
            Group of checkboxes for multiple selections.
          </p>
          <ComponentPreview
            preview={
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="option1" defaultChecked />
                  <Label htmlFor="option1">Enable notifications</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="option2" />
                  <Label htmlFor="option2">Enable analytics</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="option3" />
                  <Label htmlFor="option3">Enable marketing emails</Label>
                </div>
              </div>
            }
            code={`<div className="space-y-4">
  <div className="flex items-center space-x-2">
    <Checkbox id="option1" defaultChecked />
    <Label htmlFor="option1">Enable notifications</Label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="option2" />
    <Label htmlFor="option2">Enable analytics</Label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="option3" />
    <Label htmlFor="option3">Enable marketing emails</Label>
  </div>
</div>`}
          />
        </div>
      </div>
    </div>
  );
}
