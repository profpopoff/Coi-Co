export interface CardData {
  id: number;
  title: string;
  year: number;
  ageLimit?: string;
  type: string;
  image: {
    landscape: string;
    poster: string;
  };
}
