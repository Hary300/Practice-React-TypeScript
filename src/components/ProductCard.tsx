export default function ProductCard() {
  const productName = 'Laptop';
  const price = 100;

  return (
    <div>
      <h2>Product Info</h2>
      <p>Product Name: {productName}</p>
      <p>Price: {price}</p>
    </div>
  );
}
