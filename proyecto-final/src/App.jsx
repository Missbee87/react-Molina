import NavBar from './components/NavBar/NavBar';
import Button from './components/Button/Button';
import { Routes, Route} from 'react-router-dom';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart/Cart';



function App() {
  return (
    <div className="App">
      
      <header className='App-header'>
        <NavBar/>
      </header>
      <Button texto='Buscar' color='red' />
      <Routes>
        <Route path='/' element={<ItemListContainer/> } />
        <Route path='/cart' element={<Cart />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/> }/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
     
    </div>
  );
}


export default App;
