import { useEffect, useState } from 'react';
import ProductCardGrid from './ProductCardGrid';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  isAvailable: boolean;
};

export default function ProductGrid() {
  const [data, setData] = useState<Array<Product>>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/data/product.json');
        const data = await res.json();
        setData(data);
      } catch (err) {
        console.log(err);
        setError('Something went wrong');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  let content;
  if (loading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = error;
  } else {
    content = data.map((d) => {
      return (
        <ProductCardGrid
          key={d.id}
          title={d.title}
          price={d.price}
          image={d.image}
          isAvailable={d.isAvailable}
        />
      );
    });
  }

  return (
    <div>
      <h2 className='text-center text-2xl'>Ini adalah halaman product</h2>
      <div
        className='max-w-200 grid grid-cols-3 gap-4 p-4 m-auto
    '
      >
        {content}
      </div>
    </div>
  );
}
