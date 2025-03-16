import SearchResults from '@/app/barbers/_components/search-results';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useSearchQuery } from '@/hooks/use-search-query';

export default function Results() {
  const { data } = useSearchQuery();

  return (
    <Card className="h-[700px] flex-[2]">
      <CardHeader className="flex-row items-center gap-4">
        <CardTitle>Results</CardTitle>
        <CardDescription>
          {data?.count &&
            `Found ${data?.count && data.count > 1 ? `${data.count} results` : '0 result'}`}
        </CardDescription>
      </CardHeader>
      <CardContent className="overflow-y-scroll">
        <div className="space-y-3 overflow-y-scroll max-sm:pb-10">
          <SearchResults />
        </div>
      </CardContent>
    </Card>
  );
}
