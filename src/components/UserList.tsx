import UserCard from './UserCard';

export default function UserList() {
  const users = [
    { id: 1, name: 'Harry', age: 20 },
    { id: 2, name: 'Ben', age: 25 },
  ];
  return (
    <ul>
      {users.map((user) => (
        <UserCard key={user.id} name={user.name} age={user.age} />
      ))}
    </ul>
  );
}
