import { useQuery } from '@tanstack/react-query';
import { useSearchFilter } from '@/hooks/use-search-filter';
import { useServicesFilter } from '@/hooks/use-services-filter';
import { useShopTypeQuery } from '@/hooks/use-shop-type-query';
import { api } from '@/lib/axios';
import type { BarbersResponse } from '@/types/barbers';

export function useSearchQuery() {
  const { search } = useSearchFilter();
  const { shopType } = useShopTypeQuery();
  const { selectedServices } = useServicesFilter();

  const services =
    selectedServices.length === 0 ? '' : selectedServices.join(',');

  return useQuery<BarbersResponse>({
    queryKey: ['search', { search, shopType, services }],
    queryFn: async ({ signal }) => {
      const response = await api.get(
        `/barbers?search=${search}&is_shop=${shopType}&services=${services}`,
        { signal },
      );
      return response.data;
    },
  });
}
