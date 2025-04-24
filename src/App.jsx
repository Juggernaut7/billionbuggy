import ProfileEditor from "./ProfileEditor";
import UserList from "./UserList";
import Counter from "./Counter";


 function App() {
  return (
    <div className="p-4 flex items-center justify-center flex-col ">
      <h1 className="text-3xl font-bold mb-4">Buggy <span className="text-green-600">Dashboard </span>🐛</h1>
      
      <ProfileEditor />
      <UserList />
      <Counter/>
      
    
      <footer className="mt-8 p-4 bg-gray-500 text-white w-full text-center fixed bottom-0">
        Debugging Challenge 🧠
      </footer>
    </div>
  );
}
export default App