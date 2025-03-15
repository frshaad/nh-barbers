/* eslint-disable react/no-array-index-key */
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  className?: string;
}

export default function RatingStars({
  rating,
  maxRating = 5,
  size = 'md',
  showValue = true,
  className,
}: RatingStarsProps) {
  // Ensure rating is between 0 and maxRating
  const normalizedRating = Math.max(0, Math.min(rating, maxRating));

  // Calculate the number of full, half, and empty stars
  const fullStars = Math.floor(normalizedRating);
  const hasHalfStar = normalizedRating % 1 >= 0.3 && normalizedRating % 1 < 0.8;
  const halfStar = hasHalfStar ? 1 : 0;
  const emptyStars = maxRating - fullStars - halfStar;

  // Determine star size based on the size prop
  const starSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const starSize = starSizes[size];

  return (
    <div className={cn('flex items-center gap-1.5', className)} dir="ltr">
      <div className="flex">
        {/* Full stars */}
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star
            key={`full-${i}`}
            className={cn(starSize, 'fill-primary text-primary')}
          />
        ))}

        {/* Half star */}
        {hasHalfStar && (
          <div className="relative">
            <Star className={cn(starSize, 'text-muted-foreground')} />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: '50%' }}
            >
              <Star className={cn(starSize, 'fill-primary text-primary')} />
            </div>
          </div>
        )}

        {/* Empty stars */}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star
            key={`empty-${i}`}
            className={cn(starSize, 'text-muted-foreground')}
          />
        ))}
      </div>

      {/* Display the numeric rating if showValue is true */}
      {showValue && (
        <span className="ml-1 text-sm font-medium">
          {normalizedRating.toFixed(1)}
        </span>
      )}

      {/* Screen reader only text for accessibility */}
      <span className="sr-only">
        Rating: {normalizedRating.toFixed(1)} out of {maxRating}
      </span>
    </div>
  );
}
