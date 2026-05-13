import { useState } from 'react';

export default function LiveInput() {
  const [name, setName] = useState('');
  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter Your Name...'
      />
      <p>{name}</p>
    </div>
  );
}
