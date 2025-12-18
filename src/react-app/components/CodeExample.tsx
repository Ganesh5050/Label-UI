import { Copy } from 'lucide-react';

export default function CodeExample() {
  const installCode = `npx @react-native-reusables/cli@latest init`;
  
  const usageCode = `import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';

export default function Screen() {
  return (
    <Button>
      <Text>Click me</Text>
    </Button>
  );
}`;

  return (
    <div className="w-full px-4 py-16 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-3">
            Get started in seconds
          </h2>
          <p className="text-lg text-muted-foreground">
            Install components with a single command
          </p>
        </div>

        <div className="space-y-6">
          {/* Installation */}
          <div className="rounded-lg border border-border bg-card overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/50">
              <span className="text-sm font-medium">Installation</span>
              <button className="p-1 rounded hover:bg-accent transition-colors">
                <Copy className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
            <div className="p-4">
              <pre className="text-sm">
                <code className="text-primary">{installCode}</code>
              </pre>
            </div>
          </div>

          {/* Usage Example */}
          <div className="rounded-lg border border-border bg-card overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/50">
              <span className="text-sm font-medium">Usage</span>
              <button className="p-1 rounded hover:bg-accent transition-colors">
                <Copy className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
            <div className="p-4">
              <pre className="text-sm leading-relaxed">
                <code className="text-primary whitespace-pre">{usageCode}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
