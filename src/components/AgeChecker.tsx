import { useState } from 'react';

export default function AgeChecker() {
  const [age, setAge] = useState('');

  const text =
    age.trim() === '' ? '' : Number(age.trim()) >= 18 ? 'Adult' : 'Minor';

  return (
    <div>
      <h2>Age Checker</h2>
      <input
        type='number'
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className=' rounded-2xl border px-4 py-2'
      />
      <p>{text}</p>
    </div>
  );
}
