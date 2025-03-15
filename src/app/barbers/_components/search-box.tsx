'use client';

import { useQueryState } from 'nuqs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function SearchBox() {
  const [search, setSearch] = useQueryState('search', { defaultValue: '' });

  return (
    <section className="mx-auto flex w-full items-center gap-1 sm:max-w-md">
      <Label htmlFor="search-query" className="flex-1 text-base">
        نام آرایشگاه‌
      </Label>
      <Input
        type="text"
        id="search-query"
        value={search || ''}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-[3]"
        placeholder="نام آرایشگاه موردنظر را وارد کنید..."
      />
    </section>
  );
}
