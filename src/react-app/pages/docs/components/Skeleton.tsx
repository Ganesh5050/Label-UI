import { Skeleton } from '@/react-app/components/ui/skeleton';
import ComponentPreview from '@/react-app/components/ComponentPreview';
import CodeBlock from '@/react-app/components/CodeBlock';

export default function SkeletonDoc() {
  const basicUsageCode = `import { Skeleton } from '@/components/ui/skeleton';

export default function Screen() {
  return <Skeleton className="h-[20px] w-[100px] rounded-full" />;
}`;

  const cardCode = `import { Skeleton } from '@/components/ui/skeleton';

export default function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}`;

  const listCode = `import { Skeleton } from '@/components/ui/skeleton';

export default function SkeletonList() {
  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/6" />
        </div>
      </div>
    </div>
  );
}`;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Skeleton</h1>
        <p className="text-lg text-muted-foreground">
          Use to show a placeholder while content is loading.
        </p>
      </div>

      {/* Preview Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        
        <ComponentPreview
          preview={
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
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
          code="npx @react-native-reusables/cli@latest add skeleton" 
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
        
        <h3 className="text-xl font-semibold tracking-tight">Card</h3>
        <ComponentPreview
          preview={
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-[250px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          }
          code={cardCode}
        />
        
        <h3 className="text-xl font-semibold tracking-tight">List</h3>
        <ComponentPreview
          preview={
            <div className="w-full max-w-md space-y-3">
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/6" />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/6" />
                </div>
              </div>
            </div>
          }
          code={listCode}
        />
      </div>
    </div>
  );
}
