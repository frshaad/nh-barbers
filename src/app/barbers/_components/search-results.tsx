import BarberCard from '@/app/barbers/_components/barber-card';
import BarberCardSkeleton from '@/app/barbers/_components/barber-card.skeleton';
import { useSearchQuery } from '@/hooks/use-search-query';

export default function SearchResults() {
  const { data, isPending, isError, error } = useSearchQuery();

  if (isPending) {
    return (
      <>
        <BarberCardSkeleton />
        <BarberCardSkeleton />
        <BarberCardSkeleton />
        <BarberCardSkeleton />
      </>
    );
  }

  if (isError) {
    return <p>Error happend: {error.message}</p>;
  }

  return (
    <>
      {data.results.map((item) => (
        <BarberCard key={item.slug} {...item} />
      ))}
    </>
  );
}
