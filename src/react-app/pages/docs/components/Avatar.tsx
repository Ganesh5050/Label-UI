import { Avatar, AvatarFallback, AvatarImage } from '@/react-app/components/ui/avatar';
import ComponentPreview from '@/react-app/components/ComponentPreview';
import CodeBlock from '@/react-app/components/CodeBlock';

export default function AvatarDoc() {
  const basicUsageCode = `import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';

export default function Screen() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}`;

  const multipleSizesCode = `<div className="flex items-center gap-4">
  <Avatar className="h-8 w-8">
    <AvatarImage src="https://github.com/shadcn.png" alt="Small" />
    <AvatarFallback>SM</AvatarFallback>
  </Avatar>
  
  <Avatar className="h-10 w-10">
    <AvatarImage src="https://github.com/shadcn.png" alt="Default" />
    <AvatarFallback>DF</AvatarFallback>
  </Avatar>
  
  <Avatar className="h-16 w-16">
    <AvatarImage src="https://github.com/shadcn.png" alt="Large" />
    <AvatarFallback>LG</AvatarFallback>
  </Avatar>
</div>`;

  const fallbackCode = `<div className="flex items-center gap-4">
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  
  <Avatar>
    <AvatarImage src="invalid-url.png" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  
  <Avatar>
    <AvatarFallback>AB</AvatarFallback>
  </Avatar>
</div>`;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Avatar</h1>
        <p className="text-lg text-muted-foreground">
          An image element with a fallback for representing the user.
        </p>
      </div>

      <div className="flex gap-2">
        <a
          href="https://www.radix-ui.com/primitives/docs/components/avatar"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-md border border-border hover:bg-accent"
        >
          Docs ↗
        </a>
        <a
          href="https://www.radix-ui.com/primitives/docs/components/avatar#api-reference"
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
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://github.com/react.png" alt="@react" />
                <AvatarFallback>RE</AvatarFallback>
              </Avatar>
            </div>
          }
          code={basicUsageCode}
        />
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        
        <CodeBlock 
          code="npx @react-native-reusables/cli@latest add avatar" 
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
          <h3 className="text-xl font-semibold tracking-tight">Sizes</h3>
          <ComponentPreview
            preview={
              <div className="flex items-center gap-4">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://github.com/shadcn.png" alt="Small" />
                  <AvatarFallback className="text-xs">SM</AvatarFallback>
                </Avatar>
                
                <Avatar className="h-10 w-10">
                  <AvatarImage src="https://github.com/shadcn.png" alt="Default" />
                  <AvatarFallback>DF</AvatarFallback>
                </Avatar>
                
                <Avatar className="h-16 w-16">
                  <AvatarImage src="https://github.com/shadcn.png" alt="Large" />
                  <AvatarFallback className="text-lg">LG</AvatarFallback>
                </Avatar>
              </div>
            }
            code={multipleSizesCode}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">Fallback</h3>
          <p className="text-sm text-muted-foreground">
            The fallback is displayed when the image fails to load or is not provided.
          </p>
          <ComponentPreview
            preview={
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="Valid image" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                
                <Avatar>
                  <AvatarImage src="invalid-url.png" alt="Invalid image" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                
                <Avatar>
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
              </div>
            }
            code={fallbackCode}
          />
        </div>
      </div>
    </div>
  );
}
