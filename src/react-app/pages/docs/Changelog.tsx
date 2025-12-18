export default function Changelog() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Changelog</h1>
        <p className="text-lg text-muted-foreground">
          Latest updates and improvements to Label UI.
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h2>November 2024</h2>

        <h3>New Authentication Blocks</h3>
        <p>
          Added comprehensive authentication block components including sign in forms,
          sign up forms, email verification, password reset, and social connection options.
        </p>

        <h3>Component Updates</h3>
        <ul>
          <li>Improved Button component with better variant support</li>
          <li>Enhanced Accordion animations</li>
          <li>Added Form component with validation helpers</li>
          <li>Updated Text component with better inheritance system</li>
        </ul>

        <h2>October 2024</h2>

        <h3>New Components</h3>
        <ul>
          <li>Added Tooltip component</li>
          <li>Added Toggle Group component</li>
          <li>Added Navigation Menu component</li>
        </ul>

        <h3>Improvements</h3>
        <ul>
          <li>Better TypeScript support across all components</li>
          <li>Improved accessibility with ARIA attributes</li>
          <li>Enhanced documentation with more examples</li>
        </ul>

        <h2>September 2024</h2>

        <h3>Initial Release</h3>
        <p>
          Launch of Label UI with 30+ components, CLI tool, and
          comprehensive documentation.
        </p>
      </div>
    </div>
  );
}
