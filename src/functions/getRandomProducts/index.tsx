import { Product } from '../../models'; 

const getRandomProducts = (products : Product[], numItems: number) : Product[] => {
  const shuffled = products.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numItems);
};

export default getRandomProducts;
