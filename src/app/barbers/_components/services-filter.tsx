'use client';

import { Label } from '@/components/ui/label';
import { useFetchServicesList } from '@/hooks/use-fetch-services-list';
import { useServicesFilter } from '@/hooks/use-services-filter';
import { ServiceCheckBox } from './service-checkbox';

export default function ServicesFilter() {
  const { selectedServices, handleServiceToggle } = useServicesFilter();
  const {
    data: servicesList,
    isPending,
    isError,
    error,
  } = useFetchServicesList();

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error happend: {error.message}</p>;
  }

  return (
    <div className="space-y-2">
      <Label className="text-base">Services</Label>
      <div className="space-y-1.5">
        {servicesList.results.map((item) => (
          <ServiceCheckBox
            key={item.slug}
            isChecked={selectedServices.includes(item.slug)}
            onCheckedChange={(checked) =>
              handleServiceToggle(item.slug, checked)
            }
            {...item}
          />
        ))}
      </div>
    </div>
  );
}
