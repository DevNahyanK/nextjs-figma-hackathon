import { groq } from "next-sanity";


export const allProducts = groq `*[_type == "product"]`;
export const ceramice = groq`*[_type == "product"] [0..3]`;
export const popularProduct = groq`*[_type == "product"] [17..19]`;