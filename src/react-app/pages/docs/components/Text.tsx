import { Text } from '@/react-app/components/ui/text';
import ComponentPreview from '@/react-app/components/ComponentPreview';
import CodeBlock from '@/react-app/components/CodeBlock';

export default function TextDoc() {
  const basicUsageCode = `import { Text } from '~/components/ui/text';

export default function Screen() {
  return <Text>Hello, world!</Text>;
}`;

  const typographyCode = `import { Text } from '~/components/ui/text';

export default function Screen() {
  return (
    <div className="space-y-4">
      <Text className="text-4xl font-bold">The Rainbow Forest Adventure</Text>
      <Text className="text-xl font-semibold">Whiskers' Discovery</Text>
      <Text className="text-base">
        Once upon a time, in a magical forest, there lived a curious rabbit named Whiskers.
      </Text>
      <Text className="text-sm text-muted-foreground">
        The moral of the story is: embrace the magic of discovery.
      </Text>
    </div>
  );
}`;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Text</h1>
        <p className="text-lg text-muted-foreground">
          A component for displaying text.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        <ComponentPreview
          preview={<Text>Hello, world!</Text>}
          code={basicUsageCode}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        
        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/50">
            <span className="text-sm font-medium">CLI</span>
          </div>
          <div className="p-4">
            <pre className="text-sm">
              <code className="text-primary">npx @react-native-reusables/cli@latest add text</code>
            </pre>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock code={basicUsageCode} language="tsx" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Examples</h2>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Default</h3>
          <ComponentPreview
            preview={<Text className="text-foreground">Default: text-foreground</Text>}
            code={basicUsageCode}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">With Colors</h3>
          <ComponentPreview
            preview={
              <div className="space-y-2">
                <Text className="text-emerald-500">Inherited from Parent: text-emerald-500</Text>
                <Text className="text-purple-500">Overridden: text-purple-500</Text>
                <Text className="text-sky-500">Inherited from NestedParent: text-sky-500</Text>
              </div>
            }
            code={basicUsageCode}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Typography</h3>
          <ComponentPreview
            preview={
              <div className="max-w-2xl space-y-4">
              <Text className="text-4xl font-bold">The Rainbow Forest Adventure</Text>
              <Text className="text-base">
                Once upon a time, in a magical forest, there lived a curious rabbit named Whiskers. 
                Whiskers loved exploring and discovering new things every day.
              </Text>
              <Text className="text-2xl font-semibold">Whiskers' Discovery</Text>
              <Text className="text-base">
                One day, while hopping through the forest, Whiskers stumbled upon a mysterious rainbow-colored flower. 
                The flower had the power to make the forest come alive with vibrant colors and happy creatures.
              </Text>
              <Text className="italic text-muted-foreground border-l-2 border-border pl-4 py-2">
                "Oh, what a wonderful discovery!" exclaimed Whiskers. "I must share this magic with all my forest friends!"
              </Text>
              <Text className="text-xl font-semibold">The Colorful Transformation</Text>
              <Text className="text-base">
                Whiskers excitedly gathered all the animals in the forest and showed them the magical rainbow flower. 
                The animals were amazed and decided to plant more of these flowers to make their home even more magical.
              </Text>
              <Text className="text-sm text-muted-foreground">
                The moral of the story is: embrace the magic of discovery, share joy with others, 
                and watch as the world transforms into a colorful and beautiful place.
              </Text>
              </div>
            }
            code={typographyCode}
          />
        </div>
      </div>
    </div>
  );
}
