import ServicesFilter from '@/app/barbers/_components/services-filter';
import TypeFilter from '@/app/barbers/_components/type-filter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Filters() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle className="text-xl">فیلترها</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <TypeFilter />
        <ServicesFilter />
      </CardContent>
    </Card>
  );
}
