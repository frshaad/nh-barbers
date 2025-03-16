export type BarbersResponse = {
  count: number;
  next: unknown;
  previous: unknown;
  results: Barber[];
};

export type Barber = {
  slug: string;
  fullname: string;
  is_shop: boolean;
  avatar: string;
  address: string;
  lat: number;
  lon: number;
  rate: number;
  distance: number;
  is_bookmarked: boolean;
  phone_number: string;
  reviews_count: number;
  services: string[];
};
