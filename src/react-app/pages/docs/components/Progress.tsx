import { Progress } from '@/react-app/components/ui/progress';
import ComponentPreview from '@/react-app/components/ComponentPreview';
import CodeBlock from '@/react-app/components/CodeBlock';

export default function ProgressDoc() {
  const basicUsageCode = `import { Progress } from '@/components/ui/progress';

export default function Screen() {
  return <Progress value={33} />;
}`;

  const animatedCode = `import { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';

export default function Screen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} />;
}`;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Progress</h1>
        <p className="text-lg text-muted-foreground">
          Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
        </p>
      </div>

      <div className="flex gap-2">
        <a
          href="https://www.radix-ui.com/docs/primitives/components/progress"
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
          preview={<Progress value={33} className="w-full max-w-md" />}
          code={basicUsageCode}
        />
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        
        <CodeBlock 
          code="npx @react-native-reusables/cli@latest add progress" 
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
        
        <h3 className="text-xl font-semibold tracking-tight">Different Values</h3>
        <ComponentPreview
          preview={
            <div className="w-full max-w-md space-y-4">
              <Progress value={0} />
              <Progress value={25} />
              <Progress value={50} />
              <Progress value={75} />
              <Progress value={100} />
            </div>
          }
          code={animatedCode}
        />
      </div>
    </div>
  );
}
