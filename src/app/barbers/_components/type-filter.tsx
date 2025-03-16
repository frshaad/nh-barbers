'use client';

import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useShopTypeQuery } from '@/hooks/use-shop-type-query';

export default function TypeFilter() {
  const { localValue, setLocalValue } = useShopTypeQuery();

  return (
    <div className="space-y-2">
      <Label htmlFor="shop-type" className="text-base">
        Shop Type
      </Label>
      <Tabs
        defaultValue={localValue}
        className="w-full"
        onValueChange={setLocalValue}
        id="shop-type"
      >
        <TabsList className="w-full">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="true">Only Shops</TabsTrigger>
          <TabsTrigger value="false">Individuals</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
