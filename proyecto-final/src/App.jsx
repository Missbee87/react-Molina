import NavBar from './components/NavBar/NavBar';
import { Routes, Route} from 'react-router-dom';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
      
      <header className='App-header'>
        <NavBar/>
      </header>
      
      <Routes>
        <Route path='/' element={<ItemListContainer/> } />
        <Route path='/cart' element={<Cart />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/> }/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/checkout' element={<Checkout />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
