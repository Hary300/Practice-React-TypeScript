import ProductCard from './components/ProductCard';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <>
      <h2>User Info</h2>
      <ProfileCard name='Harry' age={20} country='Indonesia' />
      <ProfileCard name='Ben' age={50} country='USA' />
      <br />
      <h2>Product Info</h2>
      <ProductCard name='Laptop' price={100} isAvailable={true} />
      <ProductCard name='Monitor' price={70} isAvailable={false} />
    </>
  );
}

export default App;
