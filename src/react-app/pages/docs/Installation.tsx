export default function Installation() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Installation</h1>
        <p className="text-lg text-muted-foreground">
          How to install dependencies and structure your app.
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h2>Requirements</h2>
        <ul>
          <li>React Native 0.70 or higher</li>
          <li>Expo SDK 47 or higher (if using Expo)</li>
          <li>Node.js 16 or higher</li>
        </ul>

        <h2>Quick start</h2>
        <p>Run the CLI to setup your project:</p>
        
        <div className="not-prose">
          <div className="rounded-lg border border-border bg-card overflow-hidden my-4">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/50">
              <span className="text-sm font-medium">Terminal</span>
            </div>
            <div className="p-4">
              <pre className="text-sm">
                <code className="text-primary">npx @react-native-reusables/cli@latest init</code>
              </pre>
            </div>
          </div>
        </div>

        <h2>Manual installation</h2>
        <p>If you prefer to set things up manually, follow these steps:</p>

        <h3>1. Install dependencies</h3>
        <div className="not-prose">
          <div className="rounded-lg border border-border bg-card overflow-hidden my-4">
            <div className="p-4">
              <pre className="text-sm">
                <code className="text-primary">npm install nativewind tailwindcss</code>
              </pre>
            </div>
          </div>
        </div>

        <h3>2. Configure Tailwind CSS</h3>
        <p>Create a <code>tailwind.config.js</code> file in your project root:</p>
        
        <div className="not-prose">
          <div className="rounded-lg border border-border bg-card overflow-hidden my-4">
            <div className="p-4">
              <pre className="text-sm leading-relaxed">
                <code className="text-primary">{`module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        <h3>3. Start using components</h3>
        <p>
          Browse the components in the sidebar and copy the code you need into your project.
        </p>
      </div>
    </div>
  );
}
