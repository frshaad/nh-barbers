'use client';

import { useQueryState } from 'nuqs';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const SERVICES_LIST = [
  {
    id: '1',
    value: 'slug1',
    label: 'Slug one',
  },
  {
    id: '2',
    value: 'slug2',
    label: 'Slug two',
  },
  {
    id: '3',
    value: 'slug3',
    label: 'Slug three',
  },
];

export default function ServicesFilter() {
  const [services, setServices] = useQueryState('services', {
    defaultValue: '',
  });
  const servicesArray = services ? services.split(',') : [];

  const sortServicesByOriginalOrder = (services: string[]) => {
    return services.sort((a, b) => {
      const indexA = SERVICES_LIST.findIndex((item) => item.value === a);
      const indexB = SERVICES_LIST.findIndex((item) => item.value === b);
      return indexA - indexB;
    });
  };

  const handleServiceToggle = (value: string, checked: boolean) => {
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
  };

  return (
    <div className="space-y-2">
      <Label className="text-base">سرویس‌ها</Label>
      <div className="space-y-1.5">
        {SERVICES_LIST.map((item) => (
          <ServiceCheckBox
            key={item.id}
            isChecked={servicesArray.includes(item.value)}
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

type ServiceCheckBoxProps = {
  value: string;
  label: string;
  isChecked: boolean;
  // eslint-disable-next-line no-unused-vars
  onCheckedChange: (checked: boolean) => void;
};

function ServiceCheckBox({
  value,
  label,
  isChecked,
  onCheckedChange,
}: ServiceCheckBoxProps) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={value}
        value={value}
        checked={isChecked}
        className="cursor-pointer"
        onCheckedChange={(checked) => onCheckedChange(checked as boolean)}
      />
      <label
        htmlFor={value}
        className="cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
}
