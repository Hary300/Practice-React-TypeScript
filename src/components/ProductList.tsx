export default function ProductList() {
  const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Mouse', price: 50 },
  ];

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              Nama Product: {product.name}, Harga: {product.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
