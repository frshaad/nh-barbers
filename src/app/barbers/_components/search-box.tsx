'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useSearchQuery } from '@/hooks/use-search-query';

export default function SearchBox() {
  const { inputValue, setInputValue } = useSearchQuery();

  return (
    <section className="mx-auto flex w-full items-center gap-1 sm:max-w-md">
      <Label htmlFor="search-query" className="flex-1 text-base">
        نام آرایشگاه‌
      </Label>
      <Input
        type="text"
        id="search-query"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="flex-[3]"
        placeholder="نام آرایشگاه موردنظر را وارد کنید..."
      />
    </section>
  );
}
