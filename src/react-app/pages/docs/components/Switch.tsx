import { Switch } from '@/react-app/components/ui/switch';
import { Label } from '@/react-app/components/ui/label';
import ComponentPreview from '@/react-app/components/ComponentPreview';
import CodeBlock from '@/react-app/components/CodeBlock';

export default function SwitchDoc() {
  const basicUsageCode = `import { Switch } from '@/components/ui/switch';

export default function Screen() {
  return <Switch />;
}`;

  const withLabelCode = `import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function Screen() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}`;

  const formCode = `import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function NotificationSettings() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="marketing">Marketing emails</Label>
          <p className="text-sm text-muted-foreground">
            Receive emails about new products and features.
          </p>
        </div>
        <Switch id="marketing" />
      </div>
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="security">Security emails</Label>
          <p className="text-sm text-muted-foreground">
            Receive emails about your account security.
          </p>
        </div>
        <Switch id="security" defaultChecked />
      </div>
    </div>
  );
}`;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Switch</h1>
        <p className="text-lg text-muted-foreground">
          A control that allows the user to toggle between checked and not checked.
        </p>
      </div>

      <div className="flex gap-2">
        <a
          href="https://www.radix-ui.com/docs/primitives/components/switch"
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
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </div>
          }
          code={withLabelCode}
        />
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        
        <CodeBlock 
          code="npx @react-native-reusables/cli@latest add switch" 
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
        
        <h3 className="text-xl font-semibold tracking-tight">With Label</h3>
        <ComponentPreview
          preview={
            <div className="flex items-center space-x-2">
              <Switch id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
          }
          code={withLabelCode}
        />
        
        <h3 className="text-xl font-semibold tracking-tight">Form Example</h3>
        <ComponentPreview
          preview={
            <div className="w-full max-w-md space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="marketing">Marketing emails</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive emails about new products and features.
                  </p>
                </div>
                <Switch id="marketing" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="security">Security emails</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive emails about your account security.
                  </p>
                </div>
                <Switch id="security" defaultChecked />
              </div>
            </div>
          }
          code={formCode}
        />
      </div>
    </div>
  );
}
