const users = [
  { name: "Krish", hobbies: ["Drawing", "Cycling"] },
  { name: "Mouli", hobbies: ["Coding", "Music"] }
];

function UserList() {
  return (
    <div>
      {users.map(user => (
        <div key={user.name}>
          <h3>{user.name}</h3>
          <ul>
            {user.hobbies.map(hobby => (
              <li key={hobby}>{hobby}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default UserList;