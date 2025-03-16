import BarberCard from '@/app/barbers/_components/barber-card';
import { useSearchQuery } from '@/hooks/use-search-query';

export default function Results() {
  const { data, isPending, isError, error } = useSearchQuery();

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error happend: {error.message}</p>;
  }

  return (
    <div className="h-[700px] flex-[2] space-y-3 overflow-y-scroll max-sm:pb-10">
      {data.results.map((item) => (
        <BarberCard key={item.slug} {...item} />
      ))}
    </div>
  );
}
