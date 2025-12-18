import { useState } from 'react';
import { Button } from './ui/button';
import CodeBlock from './CodeBlock';

interface ComponentPreviewProps {
  preview: React.ReactNode;
  code: string;
  language?: string;
}

export default function ComponentPreview({ 
  preview, 
  code, 
  language = 'typescript' 
}: ComponentPreviewProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Button
          variant={activeTab === 'preview' ? 'secondary' : 'ghost'}
          size="sm"
          onClick={() => setActiveTab('preview')}
          className="h-8"
        >
          Preview
        </Button>
        <Button
          variant={activeTab === 'code' ? 'secondary' : 'ghost'}
          size="sm"
          onClick={() => setActiveTab('code')}
          className="h-8"
        >
          Code
        </Button>
      </div>

      {activeTab === 'preview' ? (
        <div className="rounded-lg border border-border bg-card p-8">
          <div className="flex items-center justify-center">
            {preview}
          </div>
        </div>
      ) : (
        <CodeBlock code={code} language={language} />
      )}
    </div>
  );
}
