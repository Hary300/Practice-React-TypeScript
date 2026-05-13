function App() {
  const name = 'Harry';
  const age = 20;
  const hobbies = ['Coding', 'Gaming', 'Music'];
  return (
    <>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Hobby:</p>
      <ul>
        {hobbies.map((hobby, index) => {
          return <li key={index}>{hobby}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
