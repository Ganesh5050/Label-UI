import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/react-app/components/ui/card';
import { Button } from '@/react-app/components/ui/button';
import { Input } from '@/react-app/components/ui/input';
import { Label } from '@/react-app/components/ui/label';
import ComponentPreview from '@/react-app/components/ComponentPreview';
import CodeBlock from '@/react-app/components/CodeBlock';

export default function CardDoc() {
  const basicUsageCode = `import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';

export default function Screen() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}`;

  const withFormCode = `import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';

<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Create project</CardTitle>
    <CardDescription>Deploy your new project in one-click.</CardDescription>
  </CardHeader>
  <CardContent>
    <form>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Name of your project" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="framework">Framework</Label>
          <Input id="framework" placeholder="Next.js" />
        </div>
      </div>
    </form>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Deploy</Button>
  </CardFooter>
</Card>`;

  const simpleCardsCode = `<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <Card>
    <CardHeader>
      <CardTitle>Notifications</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">
        You have 3 unread messages.
      </p>
    </CardContent>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle>Analytics</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">
        Your site has 2,341 visitors this week.
      </p>
    </CardContent>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle>Settings</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">
        Manage your account settings and preferences.
      </p>
    </CardContent>
  </Card>
</div>`;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Card</h1>
        <p className="text-lg text-muted-foreground">
          Displays a card with header, content, and footer.
        </p>
      </div>

      {/* Preview Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        
        <ComponentPreview
          preview={
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>You have 3 unread messages.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Check your inbox for new notifications and updates.</p>
              </CardContent>
              <CardFooter>
                <Button>View all</Button>
              </CardFooter>
            </Card>
          }
          code={basicUsageCode}
        />
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        
        <CodeBlock 
          code="npx @react-native-reusables/cli@latest add card" 
          language="bash"
          title="CLI"
        />
      </div>

      {/* Usage */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        
        <CodeBlock code={basicUsageCode} />
      </div>

      {/* Examples */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Examples</h2>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">With Form</h3>
          <p className="text-sm text-muted-foreground">
            Card can be used to wrap form elements for better organization.
          </p>
          <ComponentPreview
            preview={
              <Card className="w-[350px]">
                <CardHeader>
                  <CardTitle>Create project</CardTitle>
                  <CardDescription>Deploy your new project in one-click.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Name of your project" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="framework">Framework</Label>
                        <Input id="framework" placeholder="Next.js" />
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>Deploy</Button>
                </CardFooter>
              </Card>
            }
            code={withFormCode}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">Card Grid</h3>
          <p className="text-sm text-muted-foreground">
            Display multiple cards in a grid layout.
          </p>
          <ComponentPreview
            preview={
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      You have 3 unread messages.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Your site has 2,341 visitors this week.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Manage your account settings and preferences.
                    </p>
                  </CardContent>
                </Card>
              </div>
            }
            code={simpleCardsCode}
          />
        </div>
      </div>
    </div>
  );
}
