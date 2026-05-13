import { useState } from 'react';

export default function ShowHidePass() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>Show Hide Password</h2>
      <div className='relative flex max-w-50'>
        <input
          type={show ? 'text' : 'password'}
          className='px-4 py-2 rounded-2xl shadow-[0_0_5px_rgba(0,0,0,0.5)] w-full'
        />
        <button
          className='absolute right-2 top-1/2 -translate-y-1/2'
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? 'Hide' : 'Show'}
        </button>
      </div>
    </div>
  );
}
