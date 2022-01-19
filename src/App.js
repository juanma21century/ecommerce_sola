import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, BrowserRouter as Router} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import Cart from "./components/Cart";
import CustomProvider from "./components/CartContext";

console.log(Router);

function App() {

  return (
    <CustomProvider>
      <BrowserRouter>
        <NavBar/>              
        <Routes>
          <Route path = "/" element= {<ItemListContainer  /> } />
          <Route path = "/item/:id" element = { <ItemDetailContainer /> }/>
          <Route path = "/cart" element = { <Cart /> }/>
        </Routes>
      </BrowserRouter>  
    </CustomProvider>
  )
}

export default App;
