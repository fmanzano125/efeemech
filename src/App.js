//import logo from './logo.svg';
//import './App.css';
import Navbar from "./Components/Navbar/Navbar.jsx";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer get={"Sin productos aún en el carrito"} />
    </div>
  );
}

export default App;
