import { useState } from 'react';

export default function LoginStatus() {
  const [login, setLogin] = useState(false);

  return (
    <div>
      <h2>{login ? 'Welcome User' : 'Please Log in'}</h2>
      <button
        className='border min-w-20'
        onClick={() => setLogin((prev) => !prev)}
      >
        {login ? 'logout' : 'login'}
      </button>
    </div>
  );
}
