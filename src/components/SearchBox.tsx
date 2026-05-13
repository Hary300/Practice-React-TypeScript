import { useState } from 'react';

export default function SearchBox() {
  const [keyword, setKeyword] = useState('');

  const animals = [
    'Cat',
    'Dog',
    'Elephant',
    'Giraffe',
    'Lion',
    'Panda',
    'Tiger',
    'Zebra',
  ];
  const search = keyword.trim().toLowerCase();

  return (
    <div>
      <h2>Search Box</h2>
      <input
        type='text'
        placeholder='Search animal...'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => animal.toLowerCase().includes(search))
          .map((animal) => {
            return <li key={animal}>{animal}</li>;
          })}
      </ul>
    </div>
  );
}
