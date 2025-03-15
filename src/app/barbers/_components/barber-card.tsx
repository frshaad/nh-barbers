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
      <CardHeader className="flex-row justify-between gap-3">
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
        <RatingStars rating={2.5} />
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
