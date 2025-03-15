'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function ServicesFilter() {
  return (
    <div className="space-y-2">
      <Label className="text-base">سرویس‌ها</Label>
      <div className="space-y-1.5">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" className="cursor-pointer" />
          <label
            htmlFor="terms"
            className="cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            سرویس اول
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="termss" className="cursor-pointer" />
          <label
            htmlFor="termss"
            className="cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            سرویس اول
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="termas" className="cursor-pointer" />
          <label
            htmlFor="termas"
            className="cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            سرویس اول
          </label>
        </div>
      </div>
    </div>
  );
}
