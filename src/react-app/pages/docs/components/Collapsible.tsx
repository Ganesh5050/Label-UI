import { useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/react-app/components/ui/collapsible';
import { Button } from '@/react-app/components/ui/button';
import ComponentPreview from '@/react-app/components/ComponentPreview';
import CodeBlock from '@/react-app/components/CodeBlock';
import { ChevronDown } from 'lucide-react';

export default function CollapsibleDoc() {
  const basicUsageCode = `import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '~/components/ui/collapsible';
import { Button } from '~/components/ui/button';

export default function Screen() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button variant="outline">Toggle</Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2">
        <div className="rounded-md border px-4 py-3 text-sm">
          This is the collapsible content. It can be toggled by clicking the button.
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}`;

  const withIconCode = `import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '~/components/ui/collapsible';
import { Button } from '~/components/ui/button';
import { ChevronDown } from 'lucide-react';

export default function Screen() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 text-sm">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-3 text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}`;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Collapsible</h1>
        <p className="text-lg text-muted-foreground">
          An interactive component which expands/collapses a panel.
        </p>
      </div>

      <div className="flex gap-2">
        <a
          href="https://www.radix-ui.com/primitives/docs/components/collapsible"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-md border border-border hover:bg-accent"
        >
          Docs ↗
        </a>
        <a
          href="https://www.radix-ui.com/primitives/docs/components/collapsible#api-reference"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-md border border-border hover:bg-accent"
        >
          API Reference ↗
        </a>
      </div>

      {/* Preview Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        
        <ComponentPreview
          preview={<BasicCollapsibleExample />}
          code={basicUsageCode}
        />
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        
        <CodeBlock 
          code="npx @react-native-reusables/cli@latest add collapsible" 
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
          <h3 className="text-xl font-semibold tracking-tight">With Icon</h3>
          <p className="text-sm text-muted-foreground">
            Collapsible with an icon button trigger.
          </p>
          <ComponentPreview
            preview={<CollapsibleWithIconExample />}
            code={withIconCode}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">FAQ Style</h3>
          <p className="text-sm text-muted-foreground">
            Multiple collapsible items for FAQ sections.
          </p>
          <ComponentPreview
            preview={<FAQCollapsibleExample />}
            code={`<div className="space-y-2">
  <Collapsible>
    <CollapsibleTrigger asChild>
      <Button variant="outline" className="w-full justify-between">
        What is React?
        <ChevronDown className="h-4 w-4" />
      </Button>
    </CollapsibleTrigger>
    <CollapsibleContent className="mt-2 px-4 py-3 text-sm border rounded-md">
      React is a JavaScript library for building user interfaces.
    </CollapsibleContent>
  </Collapsible>

  <Collapsible>
    <CollapsibleTrigger asChild>
      <Button variant="outline" className="w-full justify-between">
        How to install?
        <ChevronDown className="h-4 w-4" />
      </Button>
    </CollapsibleTrigger>
    <CollapsibleContent className="mt-2 px-4 py-3 text-sm border rounded-md">
      Run npm install react to install React in your project.
    </CollapsibleContent>
  </Collapsible>

  <Collapsible>
    <CollapsibleTrigger asChild>
      <Button variant="outline" className="w-full justify-between">
        Is it free?
        <ChevronDown className="h-4 w-4" />
      </Button>
    </CollapsibleTrigger>
    <CollapsibleContent className="mt-2 px-4 py-3 text-sm border rounded-md">
      Yes, React is open source and free to use.
    </CollapsibleContent>
  </Collapsible>
</div>`}
          />
        </div>
      </div>
    </div>
  );
}

function BasicCollapsibleExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button variant="outline">Toggle</Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2">
        <div className="rounded-md border px-4 py-3 text-sm">
          This is the collapsible content. It can be toggled by clicking the button.
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

function CollapsibleWithIconExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 text-sm">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-3 text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

function FAQCollapsibleExample() {
  return (
    <div className="space-y-2 w-full max-w-md">
      <Collapsible>
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            What is React?
            <ChevronDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 px-4 py-3 text-sm border rounded-md">
          React is a JavaScript library for building user interfaces.
        </CollapsibleContent>
      </Collapsible>

      <Collapsible>
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            How to install?
            <ChevronDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 px-4 py-3 text-sm border rounded-md">
          Run npm install react to install React in your project.
        </CollapsibleContent>
      </Collapsible>

      <Collapsible>
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            Is it free?
            <ChevronDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 px-4 py-3 text-sm border rounded-md">
          Yes, React is open source and free to use.
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
