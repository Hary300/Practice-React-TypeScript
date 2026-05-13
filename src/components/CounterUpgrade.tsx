import { useState } from 'react';

export default function CounterUpgrade() {
  const [count, setCounter] = useState(0);

  return (
    <div>
      <h2>Counter</h2>
      <p>{count}</p>
      <div className='button-container flex gap-4'>
        <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
        <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      </div>
    </div>
  );
}
