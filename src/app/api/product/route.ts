import { CardProps } from "../../../../types/components";
import { NextResponse } from "next/server";

const productsDetails: CardProps[] = [
  {
    id: "id1",
    image: "vase",
    heading: "Rustic Vase Set",
    price: "155",
    para: "This rustic vase set adds a charming touch to any room. Perfect for holding fresh flowers or as a decor piece, its earthy tones bring warmth and elegance to your space.",
  },
  {
    id: "id2",
    image: "lamp",
    heading: "The Lucy Lamp",
    price: "399",
    para: "The Lucy Lamp features a sleek, modern design that fits perfectly in any room. Its soft lighting creates a cozy atmosphere, making it an ideal addition to your home decor.",
  },
  {
    id: "id3",
    image: "SilkVase",
    heading: "The Silky Vase",
    price: "125",
    para: "With its smooth and glossy finish, The Silky Vase adds elegance to any space. Its perfect for showcasing flowers or as a standalone decorative piece in your living room.",
  },
  {
    id: "id4",
    image: "BlackChair",
    heading: "The Dandy Chair",
    price: "250",
    para: "The Dandy Chair combines style and comfort. Its sleek design and sturdy build make it an ideal addition to any living room or office, offering both support and aesthetic appeal.",
  },
  {
    id: "id5",
    image: "goldenLamp",
    heading: "Rustic Vase Set",
    price: "155",
    para: "This rustic vase set features a timeless design that complements both modern and traditional interiors. Its neutral tones and simple elegance make it perfect for any room.",
  },
  {
    id: "id6",
    image: "smallVase",
    heading: "The Lucy Lamp",
    price: "399",
    para: "The Lucy Lamp offers a minimalist design that enhances any space. Its ambient lighting and contemporary style make it a must-have for modern homes and offices.",
  },
  {
    id: "id7",
    image: "table",
    heading: "The Silky Vase",
    price: "125",
    para: "The Silky Vase adds a touch of sophistication to your decor. Its sleek and polished look makes it ideal for both fresh flowers and as a standalone statement piece.",
  },
  {
    id: "id8",
    image: "3chairs",
    heading: "The Dandy Chair",
    price: "250",
    para: "The Dandy Chair combines timeless design with everyday comfort. Its sturdy construction and elegant look make it a perfect choice for both modern and traditional spaces.",
  },
  {
    id: "id9",
    image: "oldChair",
    heading: "The Dandy Chair",
    price: "250",
    para: "The Dandy Chair offers a classic, durable design that works well in any room. Its comfortable build and versatile style make it a lasting addition to your furniture collection.",
  },
  {
    id: "id10",
    image: "sofa",
    heading: "The Poplar Suede Sofa",
    price: "980",
    para: "The Poplar Suede Sofa provides the ultimate in comfort and style. Its soft suede fabric and sleek design make it a luxurious centerpiece for any living room.",
  },
];

export async function GET() {
  return NextResponse.json(productsDetails, { status: 200 });
}
