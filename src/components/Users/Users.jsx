export function Users({ users, setSelectedUserId, selectedUserId }) {
  return (
    <>
      <a
        data-cy="FilterAllUsers"
        href="#/"
        className={selectedUserId === null ? 'is-active' : ''}
        onClick={() => setSelectedUserId(null)}
      >
        All
      </a>
      {users.map(user => (
        <a
          key={user.id}
          data-cy="FilterUser"
          href="#/"
          className={selectedUserId === user.id ? 'is-active' : ''}
          onClick={() => setSelectedUserId(user.id)}
        >
          {user.name}
        </a>
      ))}
    </>
  );
}
