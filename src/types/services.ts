export type ServicesResponse = {
  results: ServicesResult[];
};

export type ServicesResult = {
  slug: string;
  title: string;
  icon?: string;
};
