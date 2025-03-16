/* eslint-disable react/no-array-index-key */
import { useRatingStars } from '@/hooks/use-rating-stars';
import { cn } from '@/lib/utils';
import { Star } from './star';

type RatingStarsProps = {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  className?: string;
};

const starSizes = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
} as const;

export default function RatingStars({
  rating,
  maxRating = 5,
  size = 'md',
  showValue = true,
  className,
}: RatingStarsProps) {
  const { normalizedRating, fullStars, partialWidth, remainingStars } =
    useRatingStars(rating, maxRating);

  const starSize = starSizes[size];

  return (
    <div className={cn('flex items-center gap-1.5', className)} dir="ltr">
      <div className="flex">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={`full-${i}`} isFilled size={starSize} />
        ))}

        {partialWidth > 0 && (
          <Star isPartial partialWidth={partialWidth} size={starSize} />
        )}

        {Array.from({ length: remainingStars }).map((_, i) => (
          <Star key={`empty-${i}`} size={starSize} />
        ))}
      </div>

      {showValue && (
        <span className="mt-1 ml-1 text-sm font-medium">
          {normalizedRating.toFixed(1)}
        </span>
      )}

      <span className="sr-only">
        Rating: {normalizedRating.toFixed(1)} out of {maxRating}
      </span>
    </div>
  );
}
