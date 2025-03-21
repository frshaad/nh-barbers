import Filters from '@/components/filters';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function MobileFilters() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="w-full cursor-pointer" variant="secondary">
          Filters
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="pt-20">
          <SheetTitle className="text-xl">Filters</SheetTitle>
        </SheetHeader>
        <Filters className="rounded-none border-none" hideTitle />
      </SheetContent>
    </Sheet>
  );
}
