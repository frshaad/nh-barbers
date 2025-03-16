import { useEffect, useState } from 'react';
import { useQueryState } from 'nuqs';
import { useDebounceValue } from 'usehooks-ts';
import { DEBOUNCING_DELAY } from '@/lib/constants';

export function useServicesFilter() {
  const [services, setServices] = useQueryState('services', {
    defaultValue: '',
  });
  const [localServices, setLocalServices] = useState(services);
  const [debouncedServices] = useDebounceValue(localServices, DEBOUNCING_DELAY);

  useEffect(() => {
    setLocalServices(services);
  }, [services]);

  useEffect(() => {
    setServices(debouncedServices);
  }, [debouncedServices, setServices]);

  const servicesArray = localServices
    ? localServices.split(',').filter(Boolean)
    : [];

  function handleServiceToggle(value: string, checked: boolean) {
    const newServices = checked
      ? [...servicesArray, value]
      : servicesArray.filter((service) => service !== value);

    setLocalServices(newServices.join(','));
  }

  return {
    selectedServices: servicesArray,
    handleServiceToggle,
  };
}
