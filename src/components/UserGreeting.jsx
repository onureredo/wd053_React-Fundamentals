function UserGreeting() {
  const isLoggedIn = false;
  const userName = 'Peter Parker';

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome back, {userName}</h2>
          <button>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please login</h2>
          <button>LOGIN</button>
        </div>
      )}
    </div>
  );
}

export default UserGreeting;
