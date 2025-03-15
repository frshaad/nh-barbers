import { useQueryState } from 'nuqs';
import type { ServicesList } from '@/types/services';

export function useServicesFilter(servicesList: ServicesList) {
  const [services, setServices] = useQueryState('services', {
    defaultValue: '',
  });

  const servicesArray = services ? services.split(',') : [];

  function handleServiceToggle(value: string, checked: boolean) {
    if (checked) {
      const newServices = sortServicesByOriginalOrder([
        ...servicesArray,
        value,
      ]);
      setServices(newServices.join(','));
    } else {
      const newServices = sortServicesByOriginalOrder(
        servicesArray.filter((service) => service !== value),
      );
      setServices(newServices.length === 0 ? null : newServices.join(','));
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
