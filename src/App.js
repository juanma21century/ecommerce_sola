import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, BrowserRouter as Router} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'


function App() {

  const NavLinks = [
    {href: "/productos", name: "productos", id:1},
    {href: "/categoria/1", name: "categoria 1", id:2},
    {href: "/categoria/2", name: "categoria 2", id:3}

]


  return (
    <BrowserRouter>
      <NavBar/>
          <Routes>
          <Route path = "/" element= "" />
          <Route path = "productos" element= {<ItemListContainer  />  } />
          <Route path = "carrito" element= "" />
          <Route path = "categoria/:id" element= {<ItemListContainer/>} />
          <Route path = "producto/:id" element= {<ItemDetailContainer/>} />
            
      </Routes>
      
    </BrowserRouter>  
  )
}

export default App;
