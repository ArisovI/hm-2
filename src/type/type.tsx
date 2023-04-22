export interface IProduct {
  count?: number;
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
  data: {
    id: number;
    avatar: string;
    email: string;
    name: string;
    password: string;
  };
}
