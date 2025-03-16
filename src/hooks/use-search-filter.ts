import { useEffect, useState } from 'react';
import { useQueryState } from 'nuqs';
import { useDebounceValue } from 'usehooks-ts';
import { DEBOUNCING_DELAY } from '@/lib/constants';

export function useSearchFilter() {
  const [search, setSearch] = useQueryState('search', { defaultValue: '' });
  const [inputValue, setInputValue] = useState(search);
  const [debouncedValue] = useDebounceValue(inputValue, DEBOUNCING_DELAY);

  useEffect(() => {
    setSearch(debouncedValue);
  }, [debouncedValue, setSearch]);

  return {
    inputValue,
    setInputValue,
    search,
  };
}
