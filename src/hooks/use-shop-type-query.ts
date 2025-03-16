import { useEffect, useState } from 'react';
import { useQueryState } from 'nuqs';
import { useDebounceValue } from 'usehooks-ts';
import { DEBOUNCING_DELAY } from '@/lib/constants';

export function useShopTypeQuery() {
  const [shopType, setShopType] = useQueryState('is_shop', {
    defaultValue: 'all',
  });
  const [localValue, setLocalValue] = useState(shopType);
  const [debouncedValue] = useDebounceValue(localValue, DEBOUNCING_DELAY);

  useEffect(() => {
    setShopType(debouncedValue);
  }, [debouncedValue, setShopType]);

  return {
    localValue,
    setLocalValue,
    shopType,
  };
}
