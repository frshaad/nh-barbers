import ServicesFilter from '@/app/barbers/_components/services-filter';
import TypeFilter from '@/app/barbers/_components/type-filter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type FiltersProps = {
  className?: string;
  hideTitle?: boolean;
};

export default function Filters({
  className,
  hideTitle = false,
}: FiltersProps) {
  return (
    <Card className={cn('flex-1', className)}>
      <CardHeader>
        <CardTitle className={cn('text-xl', hideTitle && 'hidden')}>
          فیلترها
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <TypeFilter />
        <ServicesFilter />
      </CardContent>
    </Card>
  );
}
