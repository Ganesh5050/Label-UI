import { AspectRatio } from '@/react-app/components/ui/aspect-ratio';

export default function AspectRatioDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Aspect Ratio</h1>
        <p className="text-lg text-muted-foreground">
          Displays content within a desired ratio.
        </p>
      </div>

      <div className="flex gap-2">
        <a
          href="https://rnprimitives.com/aspect-ratio/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-md border border-border hover:bg-accent"
        >
          Docs ↗
        </a>
        <a
          href="https://rnprimitives.com/aspect-ratio/#props"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-md border border-border hover:bg-accent"
        >
          API Reference ↗
        </a>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        
        <div className="rounded-lg border border-border bg-card p-8">
          <div className="flex justify-center">
            <div className="w-[450px]">
              <AspectRatio ratio={16 / 9} className="bg-gray-100 rounded-md overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                  alt="Photo by Drew Beamer"
                  className="h-full w-full object-cover"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        
        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/50">
            <span className="text-sm font-medium">CLI</span>
          </div>
          <div className="p-4">
            <pre className="text-sm">
              <code className="text-primary">npx @react-native-reusables/cli@latest add aspect-ratio</code>
            </pre>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        
        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/50">
            <span className="text-sm font-medium">Import</span>
          </div>
          <div className="p-4 bg-muted/30">
            <pre className="text-sm overflow-x-auto">
              <code>{`import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Text } from '@/components/ui/text';`}</code>
            </pre>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/50">
            <span className="text-sm font-medium">Example</span>
          </div>
          <div className="p-4 bg-muted/30">
            <pre className="text-sm overflow-x-auto">
              <code>{`<AspectRatio ratio={16 / 9} className='h-full w-full justify-center items-center'>
  <Text>16:9</Text>
</AspectRatio>`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
