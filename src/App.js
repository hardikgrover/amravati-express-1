import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import StateWise from './StateWise';
import Carousels from './Carousels';
import Cards from './Cards';

function App() {
  return (
    <div className="App">
     {/* carousel */}
     <Carousels/>
     {/* main div including cards */}
     <Cards/>
     {/* india api */}
     <StateWise/>
    </div>
  );
}

export default App;
