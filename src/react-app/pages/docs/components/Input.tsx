export default function InputDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Input</h1>
        <p className="text-lg text-muted-foreground">
          Displays a form input field or a component that looks like an input field.
        </p>
      </div>

      <div className="flex gap-2">
        <a
          href="https://reactnative.dev/docs/textinput"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-md border border-border hover:bg-accent"
        >
          React Native docs ↗
        </a>
      </div>

      {/* Preview Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        
        <div className="rounded-lg border border-border bg-card p-8">
          <div className="max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        
        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/50">
            <span className="text-sm font-medium">CLI</span>
          </div>
          <div className="p-4">
            <pre className="text-sm">
              <code className="text-primary">npx @react-native-reusables/cli@latest add input</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Usage */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        
        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div className="p-4">
            <pre className="text-sm leading-relaxed">
              <code className="text-primary whitespace-pre">{`import { Input } from '~/components/ui/input';

export default function Screen() {
  return <Input placeholder="Email" />;
}`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Examples */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Examples</h2>
        
        <h3 className="text-xl font-semibold tracking-tight">With Label</h3>
        <div className="rounded-lg border border-border bg-card p-8">
          <div className="max-w-md mx-auto space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="m@example.com"
              className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <h3 className="text-xl font-semibold tracking-tight">Disabled</h3>
        <div className="rounded-lg border border-border bg-card p-8">
          <div className="max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email"
              disabled
              className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white text-black text-sm opacity-50 cursor-not-allowed"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
