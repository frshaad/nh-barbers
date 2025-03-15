import Filters from '@/app/barbers/_components/filters';
import Results from '@/app/barbers/_components/results';
import SearchBox from '@/app/barbers/_components/search-box';

export default function BarbersPage() {
  return (
    <main className="container mx-auto h-screen space-y-16 pt-20">
      <SearchBox />
      <section className="mx-auto flex max-w-5xl justify-center gap-5">
        <Filters />
        <Results />
      </section>
    </main>
  );
}
