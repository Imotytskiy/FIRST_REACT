import "./App.css";
import User from "./components/UserComp";
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <User name="user name" comments={[1, 2, 3]} />
    </div>
  );
}

export default App;
