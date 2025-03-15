import { Star as StarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type StarProps = {
  isFilled?: boolean;
  isPartial?: boolean;
  partialWidth?: number;
  size: string;
};

export function Star({ isFilled, isPartial, partialWidth, size }: StarProps) {
  if (isPartial) {
    return (
      <div className="relative">
        <StarIcon className={cn(size, 'text-muted-foreground')} />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${partialWidth}%` }}
        >
          <StarIcon className={cn(size, 'fill-primary text-primary')} />
        </div>
      </div>
    );
  }

  return (
    <StarIcon
      className={cn(
        size,
        isFilled ? 'fill-primary text-primary' : 'text-muted-foreground',
      )}
    />
  );
}
