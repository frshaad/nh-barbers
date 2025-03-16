import RatingStars from '@/components/results/rating-stars';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Barber } from '@/types/barbers';

type BarberCardProps = Pick<
  Barber,
  'avatar' | 'fullname' | 'address' | 'rate' | 'reviews_count' | 'services'
>;

export default function BarberCard({
  avatar,
  fullname,
  address,
  rate,
  services,
  reviews_count,
}: BarberCardProps) {
  const normalizedServices = [...new Set(services)]; // Remove duplicated items

  return (
    <Card>
      <CardHeader className="justify-between gap-6 sm:flex-row sm:gap-3">
        <div className="flex items-center gap-2.5">
          <Avatar className="size-14">
            <AvatarImage src={avatar} />
          </Avatar>
          <div className="space-y-2">
            <CardTitle>{fullname}</CardTitle>
            <CardDescription>{address}</CardDescription>
          </div>
        </div>
        <div className="max-sm:flex max-sm:w-full max-sm:items-center max-sm:justify-between sm:space-y-2">
          <RatingStars rating={rate} showValue={false} />
          <p className="text-sm font-light">
            <span className="text-lg font-semibold">{rate}</span> from{' '}
            {reviews_count} {reviews_count > 1 ? 'Reviews' : 'Review'}
          </p>
        </div>
      </CardHeader>

      <CardFooter className="flex-wrap gap-1">
        {normalizedServices.map((service) => (
          <Badge key={service} variant="secondary">
            {service}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}
