'use client';

import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function TypeFilter() {
  return (
    <div className="space-y-2">
      <Label htmlFor="shop-type" className="text-base">
        نوع فروشگاه
      </Label>
      <Tabs
        defaultValue="all"
        className="w-full"
        dir="rtl"
        onValueChange={(v) => console.log(v)}
        id="shop-type"
      >
        <TabsList className="w-full">
          <TabsTrigger value="all">همه</TabsTrigger>
          <TabsTrigger value="shop">فقط فروشگاه‌ها</TabsTrigger>
          <TabsTrigger value="noshop">آرایشگران فردی</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
