export default function CLI() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">CLI</h1>
        <p className="text-lg text-muted-foreground">
          Use the CLI to add components to your project.
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h2>init</h2>
        <p>
          Initialize configuration and dependencies for your project.
        </p>

        <div className="not-prose">
          <div className="rounded-lg border border-border bg-card overflow-hidden my-4">
            <div className="p-4">
              <pre className="text-sm">
                <code className="text-primary">npx @react-native-reusables/cli@latest init</code>
              </pre>
            </div>
          </div>
        </div>

        <h2>add</h2>
        <p>
          Add a component to your project.
        </p>

        <div className="not-prose">
          <div className="rounded-lg border border-border bg-card overflow-hidden my-4">
            <div className="p-4">
              <pre className="text-sm">
                <code className="text-primary">npx @react-native-reusables/cli@latest add [component]</code>
              </pre>
            </div>
          </div>
        </div>

        <h3>Example</h3>
        <div className="not-prose">
          <div className="rounded-lg border border-border bg-card overflow-hidden my-4">
            <div className="p-4">
              <pre className="text-sm">
                <code className="text-primary">npx @react-native-reusables/cli@latest add button</code>
              </pre>
            </div>
          </div>
        </div>

        <h2>Options</h2>
        <ul>
          <li><code>--yes</code>, <code>-y</code> - Skip confirmation prompts</li>
          <li><code>--overwrite</code> - Overwrite existing files</li>
          <li><code>--cwd</code> - Specify the working directory</li>
          <li><code>--path</code> - Specify the path to add the component</li>
        </ul>
      </div>
    </div>
  );
}
