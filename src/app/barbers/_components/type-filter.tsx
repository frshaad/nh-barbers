'use client';

import { useQueryState } from 'nuqs';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function TypeFilter() {
  const [isShop, setIsShop] = useQueryState('is_shop', { defaultValue: 'all' });

  return (
    <div className="space-y-2">
      <Label htmlFor="shop-type" className="text-base">
        نوع فروشگاه
      </Label>
      <Tabs
        defaultValue={isShop}
        className="w-full"
        dir="rtl"
        onValueChange={(value) => setIsShop(value)}
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
