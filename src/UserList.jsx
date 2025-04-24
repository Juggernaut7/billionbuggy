import { useState } from "react";

 function UserList() {
  const [users, setUsers] = useState(["Alice", "Bob", "Charlie"]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const showDetail = selectedUser !== null;

  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleHover = (user) => {
    setTimeout(() => {
      console.log("Hovered over:", user);
    }, 1000);
  };

  return (
    <div className="mt-4 flex flex-col bg-blue-500 p-5 rounded-md">
      <h2 className="text-xl font-bold flex justify-center">Users</h2>

      <input
        onChange={handleSearch}
        type="text"
        value={searchTerm}
        className="border p-2 mt-2"
        placeholder="Search users..."
      />
      <ul className="flex items-center gap-3 my-8">
        {(filteredUsers.length > 0 ? filteredUsers : users).map(
          (user, index) => (
            <li
              key={index}
              onClick={() => {
                setSelectedUser(user);
              }}
              onMouseEnter={() => handleHover(user)}
              className="cursor-pointer hover:bg-gray-200 p-2"
            >
              {user}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const newUsers = [...users];
                  newUsers.splice(index, 1);
                  setUsers(newUsers);
                }}
                className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </li>
          )
        )}
      </ul>

      {showDetail && (
        <div className="mt-2 p-2 bg-yellow-100">
          Selected: {selectedUser}
          <p>Name length: {selectedUser.length}</p>
        </div>
      )}
    </div>
  );
}

export default UserList