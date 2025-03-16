'use client';

import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useShopTypeQuery } from '@/hooks/use-shop-type-query';

export default function TypeFilter() {
  const { localValue, setLocalValue } = useShopTypeQuery();

  return (
    <div className="space-y-2">
      <Label htmlFor="shop-type" className="text-base">
        نوع فروشگاه
      </Label>
      <Tabs
        defaultValue={localValue}
        className="w-full"
        dir="rtl"
        onValueChange={setLocalValue}
        id="shop-type"
      >
        <TabsList className="w-full">
          <TabsTrigger value="all">همه</TabsTrigger>
          <TabsTrigger value="true">فقط فروشگاه‌ها</TabsTrigger>
          <TabsTrigger value="false">آرایشگران فردی</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
