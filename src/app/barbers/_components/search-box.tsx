import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function SearchBox() {
  return (
    <section className="mx-auto flex w-full max-w-md items-center gap-1">
      <Label htmlFor="search-query" className="flex-1 text-base">
        نام آرایشگاه‌
      </Label>
      <Input
        type="text"
        id="search-query"
        className="flex-[3]"
        placeholder="نام آرایشگاه موردنظر را وارد کنید..."
      />
    </section>
  );
}
