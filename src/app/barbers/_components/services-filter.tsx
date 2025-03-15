'use client';

import { Label } from '@/components/ui/label';
import { useServicesFilter } from '@/hooks/use-services-filter';
import type { ServicesList } from '@/types/services';
import { ServiceCheckBox } from './service-checkbox';

// This will be replaced with API data later
const servicesList: ServicesList = [
  { id: '1', value: 'slug1', label: 'Slug one' },
  { id: '2', value: 'slug2', label: 'Slug two' },
  { id: '3', value: 'slug3', label: 'Slug three' },
];

export default function ServicesFilter() {
  const { selectedServices, handleServiceToggle } =
    useServicesFilter(servicesList);

  return (
    <div className="space-y-2">
      <Label className="text-base">سرویس‌ها</Label>
      <div className="space-y-1.5">
        {servicesList.map((item) => (
          <ServiceCheckBox
            key={item.id}
            isChecked={selectedServices.includes(item.value)}
            value={item.value}
            label={item.label}
            onCheckedChange={(checked) =>
              handleServiceToggle(item.value, checked)
            }
          />
        ))}
      </div>
    </div>
  );
}
