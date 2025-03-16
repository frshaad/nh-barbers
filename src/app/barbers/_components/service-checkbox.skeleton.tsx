import { Checkbox } from '@/components/ui/checkbox';
import { Skeleton } from '@/components/ui/skeleton';

export function ServiceCheckBoxSkeleton() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox className="cursor-pointer" />
      <label className="cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        <Skeleton className="h-[14px] w-20" />
      </label>
    </div>
  );
}
