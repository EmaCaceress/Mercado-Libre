import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBarComp} from './components/NavBar';
import ItemCount from './components/ItemListContainer';


const App = () => {
  return (
    <div className="App">
      <NavBarComp/>
      <ItemCount/>
    </div>
  );
}

export default App;

