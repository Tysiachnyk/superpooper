export function Users({ users, setSelectedUserId }) {
  return (
    <>
      {users.map(user => (
        <a
          data-cy="FilterUser"
          href="#/"
          className="is-active"
          onClick={() => setSelectedUserId(user.id)}
        >
          {user.name}
        </a>
      ))}
    </>
  );
}
