type ProductCardProp = {
  name: string;
  price: number;
  isAvailable: boolean;
};

export default function ProductCard({
  name,
  price,
  isAvailable,
}: ProductCardProp) {
  return (
    <div>
      <p>Product Name: {name}</p>
      <p>Price: {price}</p>
      <p>Status: {isAvailable ? 'Available' : 'Out of stock'}</p>
    </div>
  );
}
