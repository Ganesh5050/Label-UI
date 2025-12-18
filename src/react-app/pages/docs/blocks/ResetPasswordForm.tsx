export default function ResetPasswordFormBlock() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Reset password form</h1>
        <p className="text-lg text-muted-foreground">
          A form for resetting a user's password with new password confirmation.
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
                <h2 className="text-2xl font-semibold tracking-tight">Reset your password</h2>
                <p className="text-sm text-gray-600">
                  Enter your new password below
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">New password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Confirm password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button className="w-full py-2 px-4 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
                  Reset password
                </button>

                <button className="w-full py-2 px-4 text-sm text-gray-600 hover:text-black transition-colors">
                  Cancel
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
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';

export default function ResetPasswordForm() {
  return (
    <View className="max-w-md mx-auto p-8">
      <View className="space-y-6">
        <View className="space-y-2 text-center">
          <Text className="text-2xl font-semibold">
            Reset your password
          </Text>
          <Text className="text-sm text-muted-foreground">
            Enter your new password below
          </Text>
        </View>

        <View className="space-y-4">
          <Input placeholder="New password" secureTextEntry />
          <Input placeholder="Confirm password" secureTextEntry />
          
          <Button variant="primary">
            <Text>Reset password</Text>
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
