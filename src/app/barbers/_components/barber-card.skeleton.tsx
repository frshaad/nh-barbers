import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function BarberCardSkeleton() {
  return (
    <Card>
      <CardHeader className="justify-between gap-6 sm:flex-row sm:gap-3">
        <div className="flex items-center gap-2.5">
          <Skeleton className="size-14 rounded-full" />
          <div className="space-y-2">
            <CardTitle>
              <Skeleton className="h-4 w-48" />
            </CardTitle>
            <CardDescription>
              <Skeleton className="h-5 w-48" />
            </CardDescription>
          </div>
        </div>
        <div className="max-sm:flex max-sm:w-full max-sm:items-center max-sm:justify-between sm:space-y-2">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-7 w-24" />
        </div>
      </CardHeader>

      <CardFooter className="flex-wrap gap-1">
        <Skeleton className="h-[22px] w-[300px]" />
      </CardFooter>
    </Card>
  );
}
