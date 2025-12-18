export default function AlertDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Alert</h1>
        <p className="text-lg text-muted-foreground">
          Displays a callout for user attention.
        </p>
      </div>

      <div className="flex gap-2">
        <a
          href="https://www.radix-ui.com/docs/primitives/components/alert"
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
        
        <div className="rounded-lg border border-border bg-card p-8">
          <div className="max-w-xl mx-auto">
            <div className="rounded-lg border border-border bg-white p-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h5 className="font-medium mb-1 text-black">Heads up!</h5>
                  <p className="text-sm text-black">
                    You can add components to your app using the CLI.
                  </p>
                </div>
              </div>
            </div>
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
              <code className="text-primary">npx @react-native-reusables/cli@latest add alert</code>
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
              <code className="text-primary whitespace-pre">{`import { Alert } from '~/components/ui/alert';
import { Text } from '~/components/ui/text';

export default function Screen() {
  return (
    <Alert>
      <Alert.Title>
        <Text>Heads up!</Text>
      </Alert.Title>
      <Alert.Description>
        <Text>You can add components using the CLI.</Text>
      </Alert.Description>
    </Alert>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
