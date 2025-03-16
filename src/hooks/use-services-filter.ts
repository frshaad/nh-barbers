import { useEffect, useState } from 'react';
import { useQueryState } from 'nuqs';
import { useDebounceValue } from 'usehooks-ts';
import { DEBOUNCING_DELAY } from '@/lib/constants';
import type { ServicesList } from '@/types/services';

export function useServicesFilter(servicesList: ServicesList) {
  const [services, setServices] = useQueryState('services', {
    defaultValue: '',
  });
  const [localServices, setLocalServices] = useState(services);
  const [debouncedServices] = useDebounceValue(localServices, DEBOUNCING_DELAY);

  useEffect(() => {
    setServices(debouncedServices);
  }, [debouncedServices, setServices]);

  const servicesArray = localServices ? localServices.split(',') : [];

  function handleServiceToggle(value: string, checked: boolean) {
    if (checked) {
      const newServices = sortServicesByOriginalOrder([
        ...servicesArray,
        value,
      ]);
      setLocalServices(newServices.join(','));
    } else {
      const newServices = sortServicesByOriginalOrder(
        servicesArray.filter((service) => service !== value),
      );
      setLocalServices(newServices.length === 0 ? '' : newServices.join(','));
    }
  }

  return {
    selectedServices: servicesArray,
    handleServiceToggle,
  };

  // ******** ↓ Helpers ↓ ********
  function sortServicesByOriginalOrder(services: string[]): string[] {
    return services.sort((a, b) => {
      const indexA = servicesList.findIndex((item) => item.value === a);
      const indexB = servicesList.findIndex((item) => item.value === b);
      return indexA - indexB;
    });
  }
}
