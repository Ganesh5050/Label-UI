import * as React from 'react';
import { cn } from '@/react-app/lib/utils';

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {}

const Text = React.forwardRef<HTMLSpanElement, TextProps>(
  ({ className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn('text-foreground', className)}
        {...props}
      />
    );
  }
);
Text.displayName = 'Text';

export { Text };
