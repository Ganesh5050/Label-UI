export default function SignUpFormBlock() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Sign up form</h1>
        <p className="text-lg text-muted-foreground">
          A registration form with email, password, and confirmation fields.
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
                <h2 className="text-2xl font-semibold tracking-tight">Create an account</h2>
                <p className="text-sm text-gray-600">
                  Enter your information to get started
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="m@example.com"
                    className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button className="w-full py-2 px-4 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
                  Sign up
                </button>

                <p className="text-center text-sm text-gray-600">
                  Already have an account?{' '}
                  <button className="text-blue-600 hover:underline">Sign in</button>
                </p>
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
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';

export default function SignUpForm() {
  return (
    <View className="max-w-md mx-auto p-8">
      <View className="space-y-6">
        <View className="space-y-2 text-center">
          <Text className="text-2xl font-semibold">
            Create an account
          </Text>
          <Text className="text-sm text-muted-foreground">
            Enter your information to get started
          </Text>
        </View>

        <View className="space-y-4">
          <Input placeholder="John Doe" />
          <Input placeholder="m@example.com" />
          <Input placeholder="••••••••" secureTextEntry />
          
          <Button variant="primary">
            <Text>Sign up</Text>
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
