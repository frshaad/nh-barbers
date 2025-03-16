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
    setServices(debouncedServices);
  }, [debouncedServices, setServices]);

  const servicesArray = localServices ? localServices.split(',') : [];

  function handleServiceToggle(value: string, checked: boolean) {
    if (checked) {
      setLocalServices([...servicesArray, value].join(','));
    } else {
      const newServices = servicesArray.filter((service) => service !== value);
      setLocalServices(newServices.length === 0 ? '' : newServices.join(','));
    }
  }

  return {
    selectedServices: servicesArray,
    handleServiceToggle,
  };
}
