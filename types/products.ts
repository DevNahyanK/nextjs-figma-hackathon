export interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    dimensions: {
      width: string;
      height: string;
      depth: string;
    };
    features: string[];
    image: {
      asset: {
        _id: string;
        url: string;
      };
    };
  }