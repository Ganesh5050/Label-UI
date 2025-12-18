export default function SocialConnectionsBlock() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Social connections</h1>
        <p className="text-lg text-muted-foreground">
          OAuth provider buttons for social authentication.
        </p>
      </div>

      <div className="flex gap-2">
        <a
          href="https://clerk.com/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-md border border-border hover:bg-accent"
        >
          Clerk docs ↗
        </a>
      </div>

      {/* Preview Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        
        <div className="rounded-lg border border-border bg-background p-8 min-h-[600px] flex items-center justify-center">
          <div className="w-full max-w-md mx-auto p-8 rounded-lg border border-border bg-white text-black">
            <div className="space-y-6">
              <div className="space-y-2 text-center">
                <h2 className="text-2xl font-semibold tracking-tight">Sign in with</h2>
                <p className="text-sm text-gray-600">
                  Choose your preferred authentication method
                </p>
              </div>

              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-md border border-gray-300 bg-white hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-sm font-medium">Continue with Google</span>
                </button>

                <button className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-md border border-gray-300 bg-white hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="text-sm font-medium">Continue with GitHub</span>
                </button>

                <button className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-md border border-gray-300 bg-white hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-sm font-medium">Continue with Facebook</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        
        <p className="text-sm text-muted-foreground">
          Copy and paste the code below into your project.
        </p>

        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div className="p-4">
            <pre className="text-sm leading-relaxed">
              <code className="text-primary whitespace-pre">{`import { View } from 'react-native';
import { Text } from '~/components/ui/text';
import { Button } from '~/components/ui/button';

export default function SocialConnections() {
  return (
    <View className="max-w-md mx-auto p-8">
      <View className="space-y-6">
        <View className="space-y-2 text-center">
          <Text className="text-2xl font-semibold">
            Sign in with
          </Text>
          <Text className="text-sm text-muted-foreground">
            Choose your preferred authentication method
          </Text>
        </View>

        <View className="space-y-3">
          <Button variant="outline">
            <Text>Continue with Google</Text>
          </Button>
          <Button variant="outline">
            <Text>Continue with GitHub</Text>
          </Button>
          <Button variant="outline">
            <Text>Continue with Facebook</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
