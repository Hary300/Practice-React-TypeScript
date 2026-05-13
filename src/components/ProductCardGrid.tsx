type ProductCardGridProp = {
  title: string;
  price: number;
  image: string;
  isAvailable: boolean;
};

export default function ProductCardGrid({
  title,
  price,
  image,
  isAvailable,
}: ProductCardGridProp) {
  return (
    <div className='flex flex-col p-4 rounded-2xl shadow-[0_0_5px_rgba(0,0,0,0.5)] transition-transform duration-300 '>
      <div className='w-full h-30 overflow-hidden'>
        <img
          src={image}
          alt={title}
          className='size-full object-cover object-center'
        />
      </div>
      <h3>Product Name: {title}</h3>
      <p>Price: {price}</p>
      <p>Status: {isAvailable ? 'Available' : 'Out of stock'}</p>
    </div>
  );
}
