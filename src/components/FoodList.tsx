export default function FoodList() {
  const foods = ['Burger', 'Pizza', 'Hotdog'];
  return (
    <div>
      <h2>Food List</h2>
      <ul>
        {foods.map((food) => {
          return <li key={food}>{food}</li>;
        })}
      </ul>
    </div>
  );
}
