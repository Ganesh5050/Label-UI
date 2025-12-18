import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function AccordionDoc() {
  const [openItem, setOpenItem] = useState<string | null>('item-1');

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Accordion</h1>
        <p className="text-lg text-muted-foreground">
          A vertically stacked set of interactive headings that each reveal a section of content.
        </p>
      </div>

      <div className="flex gap-2">
        <a
          href="https://www.radix-ui.com/docs/primitives/components/accordion"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-md border border-border hover:bg-accent"
        >
          Docs ↗
        </a>
        <a
          href="https://www.radix-ui.com/docs/primitives/components/accordion#api-reference"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-md border border-border hover:bg-accent"
        >
          API Reference ↗
        </a>
      </div>

      {/* Preview Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        </div>
        
        <div className="rounded-lg border border-border bg-card p-8">
          <div className="max-w-xl mx-auto">
            <div className="border border-border rounded-lg overflow-hidden bg-white">
              {['item-1', 'item-2', 'item-3'].map((itemId, index) => {
                const titles = ['Product Information', 'Shipping Details', 'Return Policy'];
                const contents = [
                  'Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability. Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts.',
                  'We offer fast and reliable shipping worldwide. Orders are typically processed within 1-2 business days. Standard shipping takes 5-7 business days, while express shipping delivers in 2-3 business days.',
                  'We accept returns within 30 days of purchase. Items must be unused and in their original packaging. Contact our support team to initiate a return.',
                ];
                
                const isOpen = openItem === itemId;
                
                return (
                  <div key={itemId} className="border-b border-border last:border-b-0">
                    <button
                      onClick={() => setOpenItem(isOpen ? null : itemId)}
                      className="flex w-full items-center justify-between px-4 py-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-black">{titles[index]}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-sm text-black">
                        {contents[index]}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        
        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/50">
            <span className="text-sm font-medium">CLI</span>
          </div>
          <div className="p-4">
            <pre className="text-sm">
              <code className="text-primary">npx @react-native-reusables/cli@latest add accordion</code>
            </pre>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          Or copy and paste the component code into your project.
        </p>
      </div>

      {/* Usage */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        
        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div className="p-4">
            <pre className="text-sm leading-relaxed">
              <code className="text-primary whitespace-pre">{`import { Accordion } from '~/components/ui/accordion';
import { Text } from '~/components/ui/text';

export default function Screen() {
  return (
    <Accordion type="single" collapsible>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>
          <Text>Product Information</Text>
        </Accordion.Trigger>
        <Accordion.Content>
          <Text>Our flagship product...</Text>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
