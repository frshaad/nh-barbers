export function useRatingStars(rating: number, maxRating: number = 5) {
  const normalizedRating = Math.max(0, Math.min(rating, maxRating));
  const fullStars = Math.floor(normalizedRating);
  const partialWidth = (normalizedRating % 1) * 100;
  const remainingStars = maxRating - Math.ceil(normalizedRating);

  return {
    normalizedRating,
    fullStars,
    partialWidth,
    remainingStars,
  };
}
