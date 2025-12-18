export default function Customization() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Customization</h1>
        <p className="text-lg text-muted-foreground">
          Customize components to match your design system.
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h2>Philosophy</h2>
        <p>
          Components are built to be customizable. You own the code, so you can modify 
          anything to fit your needs.
        </p>

        <h2>Using CSS Variables</h2>
        <p>
          The components use CSS variables for theming. You can customize the look and 
          feel by modifying these variables in your global CSS file.
        </p>

        <div className="not-prose">
          <div className="rounded-lg border border-border bg-card overflow-hidden my-4">
            <div className="p-4">
              <pre className="text-sm leading-relaxed">
                <code className="text-primary whitespace-pre">{`:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 98%;
  --secondary: 240 4.8% 95.9%;
  --secondary-foreground: 240 5.9% 10%;
  /* ... */
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        <h2>Customizing Components</h2>
        <p>
          Each component uses <code>class-variance-authority</code> for variant management.
          You can add new variants or modify existing ones directly in the component file.
        </p>

        <h2>Adding New Variants</h2>
        <p>
          To add a new variant to a component, update the variants object in the component's 
          source file. For example, to add a new button variant:
        </p>

        <div className="not-prose">
          <div className="rounded-lg border border-border bg-card overflow-hidden my-4">
            <div className="p-4">
              <pre className="text-sm leading-relaxed">
                <code className="text-primary whitespace-pre">{`const buttonVariants = cva(
  "...",
  {
    variants: {
      variant: {
        default: "...",
        custom: "bg-purple-500 text-white",
      },
    },
  }
);`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
