export default function VerifyEmailFormBlock() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Verify email form</h1>
        <p className="text-lg text-muted-foreground">
          A form for verifying an email address with an OTP sent via email.
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
                <h2 className="text-2xl font-semibold tracking-tight">Verify your email</h2>
                <p className="text-sm text-gray-600">
                  Enter the verification code sent to m@example.com
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Verification code</label>
                  <input
                    type="text"
                    placeholder="000000"
                    className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button className="text-sm text-blue-600 hover:underline">
                  Didn't receive the code? Resend
                </button>

                <button className="w-full py-2 px-4 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
                  Continue
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

export default function VerifyEmailForm() {
  return (
    <View className="max-w-md mx-auto p-8">
      <View className="space-y-6">
        <View className="space-y-2 text-center">
          <Text className="text-2xl font-semibold">
            Verify your email
          </Text>
          <Text className="text-sm text-muted-foreground">
            Enter the verification code sent to m@example.com
          </Text>
        </View>

        <View className="space-y-4">
          <Input placeholder="000000" />
          
          <Button variant="primary">
            <Text>Continue</Text>
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
