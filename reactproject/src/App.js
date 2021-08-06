import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/topbar";
import "./app.css"
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Topbar/>
        <div className="container">
          <Sidebar/>
          <Home/>
        </div>
      </div>
  );
}

export default App;
