import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/axios';
import type { ServicesResponse } from '@/types/services';

export function useFetchServicesList() {
  return useQuery<ServicesResponse>({
    queryKey: ['services'],
    queryFn: async () => {
      const response = await api.get('/services');
      return response.data;
    },
  });
}
