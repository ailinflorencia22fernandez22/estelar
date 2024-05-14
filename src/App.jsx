import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import './App.css'
import {BrowserRouter,Routes, Route } from "react-router-dom"


function App() {
 

  return (
   <BrowserRouter>
     <NavBar/>

     <Routes>
        <Route path="/"element={ <ItemListContainer  saludo="Bienvenidos a lo Damian"/>}/>
        <Route path="/category/:idCategory"element={ <ItemListContainer  saludo="Bienvenidos a lo Damian"/>}/>
        <Route path="/detail/:idProduct" element={< ItemDetailContainer />} />
         
     </Routes>
     
    </BrowserRouter>
    
  )

}

export default App
