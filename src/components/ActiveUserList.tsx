export default function ActiveUserList() {
  const users = [
    { id: 1, name: 'Harry', active: true },
    { id: 2, name: 'Ben', active: false },
    { id: 3, name: 'John', active: true },
  ];

  return (
    <div>
      <h2>Active User List</h2>
      <ul>
        {users
          .filter((user) => user.active === true)
          .map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
      </ul>
    </div>
  );
}
