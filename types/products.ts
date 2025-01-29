export interface Product {
  category: {
    _ref: string; // Reference to the category document
    _type: "reference";
  };
  name: string; // Title of the product
  slug: {
    _type: "slug";
    current: string; // The slug string
  };
  image: {
    _type: "image";
    asset: {
      _ref: string; // Reference to the image asset
      _type: "reference";
    };
  };
  price: number; // Price of the product
  quantity?: number; // Quantity available (optional, with minimum value 0)
  tags?: string[]; // Array of tags (optional)
  description?: string; // Detailed description (optional)
  features?: string[]; // List of key features (optional)
  dimensions?: {
    height?: string; // Height of the product (optional)
    width?: string;  // Width of the product (optional)
    depth?: string;  // Depth of the product (optional)
  };
}
