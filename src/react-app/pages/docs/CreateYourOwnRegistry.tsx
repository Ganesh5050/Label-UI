export default function CreateYourOwnRegistry() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Create Your Own Registry</h1>
        <p className="text-lg text-muted-foreground">
          Build and share your own component registry.
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p>
          You can create your own registry to share custom components with your team or
          the community. This allows you to maintain your own collection of components
          that can be installed via the CLI.
        </p>

        <h2>Registry Structure</h2>
        <p>
          A registry is a JSON file that defines the components available for installation.
          The CLI uses this file to determine what to install and where to put it.
        </p>

        <div className="not-prose">
          <div className="rounded-lg border border-border bg-card overflow-hidden my-4">
            <div className="p-4">
              <pre className="text-sm leading-relaxed">
                <code className="text-primary whitespace-pre">{`{
  "name": "my-registry",
  "components": {
    "button": {
      "files": [
        {
          "path": "components/ui/button.tsx",
          "type": "registry:ui"
        }
      ],
      "dependencies": ["@rn-primitives/slot"]
    }
  }
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        <h2>Using Your Registry</h2>
        <p>
          Point the CLI to your registry URL:
        </p>

        <div className="not-prose">
          <div className="rounded-lg border border-border bg-card overflow-hidden my-4">
            <div className="p-4">
              <pre className="text-sm">
                <code className="text-primary">npx @label-ui/cli@latest add button --registry https://your-registry.com/registry.json</code>
              </pre>
            </div>
          </div>
        </div>

        <h2>Example Registries</h2>
        <ul>
          <li>
            <a href="https://github.com/ganesh5050" target="_blank" rel="noopener noreferrer">
              Official Registry
            </a>
            {' '}- The default registry with all components
          </li>
        </ul>
      </div>
    </div>
  );
}
