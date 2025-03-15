'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Filters() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle className="text-xl">فیلترها</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <TypeFilter />
        <ServicesFilter />
      </CardContent>
    </Card>
  );
}

function TypeFilter() {
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

function ServicesFilter() {
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
