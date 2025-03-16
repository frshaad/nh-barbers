'use client';

import { useMediaQuery } from 'usehooks-ts';
import Filters from '@/components/filters';
import MobileFilters from '@/components/filters/mobile-filters';
import Results from '@/components/results';
import SearchBox from '@/components/search-box';
import { cn } from '@/lib/utils';

export default function BarbersPage() {
  const isMobile = useMediaQuery('(max-width: 768px)', {
    initializeWithValue: false,
  });

  return (
    <main className="container mx-auto h-screen max-w-11/12 space-y-16 pt-20">
      <SearchBox />
      {isMobile ? (
        <section className="mx-auto max-w-5xl space-y-5">
          <MobileFilters />
          <Results />
        </section>
      ) : (
        <section
          className={cn(
            'mx-auto flex max-w-5xl justify-center gap-5',
            isMobile ? 'flex-col' : '',
          )}
        >
          <Filters />
          <Results />
        </section>
      )}
    </main>
  );
}
