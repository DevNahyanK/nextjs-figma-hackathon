/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"], 
    
  },
};
  module.exports = nextConfig;



  
// export default nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   env: {
//     SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
//     SANITY_DATASET: process.env.SANITY_DATASET,
//     SANITY_API_TOKEN: process.env.SANITY_API_TOKEN,
//   },
// };

// export default nextConfig;
