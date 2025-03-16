'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useSearchFilter } from '@/hooks/use-search-filter';

export default function SearchBox() {
  const { inputValue, setInputValue } = useSearchFilter();

  return (
    <section className="mx-auto flex w-full items-center gap-5 sm:max-w-md">
      <Label htmlFor="search-query" className="text-base">
        Barber&apos;s Name
      </Label>
      <Input
        type="text"
        id="search-query"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="flex-[3]"
        placeholder="Enter a name to start searching..."
      />
    </section>
  );
}
