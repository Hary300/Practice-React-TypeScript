type User = {
  name: string;
  age: number;
};

export default function UserCard({ name, age }: User) {
  return (
    <li>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </li>
  );
}
