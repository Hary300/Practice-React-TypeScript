import { useState } from 'react';

export default function NameChanger() {
  const [name, setName] = useState('Harry');

  return (
    <div>
      <h2>Name Changer</h2>
      <p>{name}</p>
      <button onClick={() => setName(name === 'Harry' ? 'Ben' : 'Harry')}>
        Change
      </button>
    </div>
  );
}
