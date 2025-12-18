export default function AuthenticationIndex() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Authentication</h1>
        <p className="text-lg text-muted-foreground">
          Beautiful authentication forms and flows for your React Native app.
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p>
          This collection of authentication blocks provides everything you need to build 
          secure, user-friendly authentication flows. Each block is designed to work with 
          popular authentication providers like Clerk, Auth0, or your custom backend.
        </p>

        <h2>Available Blocks</h2>
        <ul>
          <li><a href="/docs/blocks/authentication/sign-in-form">Sign in form</a> - Email and password login</li>
          <li><a href="/docs/blocks/authentication/sign-up-form">Sign up form</a> - User registration</li>
          <li><a href="/docs/blocks/authentication/verify-email-form">Verify email form</a> - Email verification with OTP</li>
          <li><a href="/docs/blocks/authentication/reset-password-form">Reset password form</a> - Password reset flow</li>
          <li><a href="/docs/blocks/authentication/forgot-password-form">Forgot password form</a> - Password recovery</li>
          <li><a href="/docs/blocks/authentication/social-connections">Social connections</a> - OAuth providers</li>
          <li><a href="/docs/blocks/authentication/user-menu">User menu</a> - Account dropdown menu</li>
        </ul>

        <h2>Integration</h2>
        <p>
          These blocks are designed to work seamlessly with authentication providers. 
          Check the{' '}
          <a href="https://clerk.com/docs" target="_blank" rel="noopener noreferrer">
            Clerk documentation
          </a>
          {' '}for integration examples.
        </p>
      </div>
    </div>
  );
}
