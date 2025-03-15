import RatingStars from '@/app/barbers/_components/rating-stars';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function BarberCard() {
  return (
    <Card>
      <CardHeader className="justify-between gap-6 sm:flex-row sm:gap-3">
        <div className="flex items-center gap-2.5">
          <Avatar className="size-14">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <CardTitle>محسن صادقی</CardTitle>
            <CardDescription>
              خیابان امام، کوچه شهید درویشی، جنب میوه فروشی خیابان امام، کوچه
              شهید درویشی، جنب میوه فروشی
            </CardDescription>
          </div>
        </div>
        <div className="max-sm:flex max-sm:w-full max-sm:items-center max-sm:justify-between">
          <p className="sm:hidden">امتیاز</p>
          <RatingStars rating={3.3} />
        </div>
      </CardHeader>

      <CardFooter className="flex-wrap gap-1">
        <Badge variant="secondary">سرویس</Badge>
        <Badge variant="secondary">سرویس</Badge>
        <Badge variant="secondary">سرویس</Badge>
        <Badge variant="secondary">سرویس</Badge>
        <Badge variant="secondary">سرویس</Badge>
        <Badge variant="secondary">سرویس</Badge>
      </CardFooter>
    </Card>
  );
}
