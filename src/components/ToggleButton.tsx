import { useState } from 'react';

export default function ToggleButton() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <h2>Toggle Button</h2>
      <p className={`${toggle ? 'text-green-500' : 'text-red-500'}`}>
        {toggle ? 'ON' : 'OFF'}
      </p>
      <button onClick={() => setToggle(!toggle)}>Switch</button>
    </div>
  );
}
