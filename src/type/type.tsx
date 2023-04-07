export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  images: any[];
  category: {
    name: string;
  };
}
