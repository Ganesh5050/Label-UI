export default function Introduction() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Introduction</h1>
        <p className="text-lg text-muted-foreground">
          Beautifully designed components built with Radix UI and Tailwind CSS.
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p>
          Label UI provides a collection of beautiful, accessible, and customizable
          components for your applications.
        </p>

        <h2>What is this?</h2>
        <p>
          This is a collection of reusable components built using Radix UI and styled with Tailwind CSS.
          The components are designed to be accessible, customizable, and easy to use.
        </p>

        <h2>Philosophy</h2>
        <p>
          Unlike traditional component libraries, this is not an npm package you install. Instead,
          you copy and paste the components you need into your project. This gives you full control
          over the code and allows you to customize it to fit your needs.
        </p>

        <h2>Features</h2>
        <ul>
          <li>Copy and paste components directly into your project</li>
          <li>Built with Radix UI primitives for accessibility</li>
          <li>Styled with Tailwind CSS</li>
          <li>Works on Web, iOS, and Android</li>
          <li>Open source and MIT licensed</li>
          <li>TypeScript support out of the box</li>
        </ul>

        <h2>Credits</h2>
        <p>
          Built by{' '}
          <a href="https://github.com/ganesh5050" target="_blank" rel="noopener noreferrer">
            ganesh5050
          </a>{' '}
          at Label UI.
        </p>
      </div>
    </div>
  );
}
