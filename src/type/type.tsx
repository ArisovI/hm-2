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

export interface IUserInfo {
  id: number;
  avatar: string;
  name: string;
}
