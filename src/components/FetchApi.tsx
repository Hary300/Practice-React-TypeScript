import { useEffect, useState } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
};

export default function FetchApi() {
  const [data, setData] = useState<Array<User>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();

        setData(data);
      } catch (err) {
        console.log(err);
        setError('Something went wrong');
      } finally {
        // simulation, in the real project no need to give seTimeout,
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Fetch API</h2>
      <ul>
        {data.map((d) => {
          return (
            <li key={d.id}>
              <p>{`Name: ${d.name}, Email: ${d.email}`}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
