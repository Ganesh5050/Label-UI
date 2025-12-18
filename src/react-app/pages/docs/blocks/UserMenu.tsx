export default function UserMenuBlock() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">User menu</h1>
        <p className="text-lg text-muted-foreground">
          A dropdown menu for user account actions and profile settings.
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
          <div className="w-full max-w-xs mx-auto rounded-lg border border-border bg-white text-black overflow-hidden">
            <div className="p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-sm font-medium text-blue-600">JD</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">John Doe</p>
                  <p className="text-xs text-gray-600 truncate">john@example.com</p>
                </div>
              </div>
            </div>

            <div className="py-2">
              <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors">
                Profile
              </button>
              <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors">
                Settings
              </button>
              <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors">
                Billing
              </button>
            </div>

            <div className="border-t border-border py-2">
              <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-50 transition-colors">
                Sign out
              </button>
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
import { DropdownMenu } from '~/components/ui/dropdown-menu';

export default function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger>
        <Button variant="ghost">
          <Text>JD</Text>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>
          <Text>Profile</Text>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Text>Settings</Text>
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>
          <Text>Sign out</Text>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
