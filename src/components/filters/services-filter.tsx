import ServicesList from '@/components/filters/services-list';
import { Label } from '@/components/ui/label';

export default function ServicesFilter() {
  return (
    <div className="space-y-2">
      <Label className="text-base">Services</Label>
      <div className="space-y-1.5">
        <ServicesList />
      </div>
    </div>
  );
}
