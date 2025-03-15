import RatingStars from '@/app/barbers/_components/rating-stars';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function BarberCard() {
  return (
    <Card className="flex-row items-center">
      <CardHeader className="flex-row gap-2.5">
        <Avatar className="size-14">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <CardTitle>محسن صادقی</CardTitle>
          <CardDescription>
            خیابان امام، کوچه شهید درویشی، جنب میوه فروشی
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p>سرویس ها</p>
      </CardContent>
      <CardFooter>
        <RatingStars rating={2.5} />
      </CardFooter>
    </Card>
  );
}
