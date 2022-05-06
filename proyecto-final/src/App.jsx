import NavBar from './components/NavBar/NavBar';
import Button from './components/Button/Button';
import { Routes, Route} from 'react-router-dom';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer';
import Cart from './pages/Cart/Cart';
import CartContext from './components/store/Cart-context';


function App() {
  return (
    <div className="App">
      <CartContext.Provider value={{
        products: [
        {
          id: 1,
          nombre: "Tratamiento cerámico",
          precio: 10000,
          category: "servicios",
          imagen:"https://dercocenter-api.s3.us-east-1.amazonaws.com/images/contents/2021-08-25-car-detailing.jpg",
          descripcion: "Consiste en un lavado al detalle de la unidad y posterior descontaminado de la superficie para eliminar toda contaminación adherida al barniz y que genera una aspereza de la pintura, además de ir deteriorando la misma.Posterior a esto se procede a una corrección de imperfecciones (micro rayas superficiales circulares -swirls mark- y rectas) mediante diferente etapas de pulidos. Seguido por un paso de abrillantado para lograr el máximo brillo posible y finalizando el trabajo con el sellado de la superficie con un sellador cerámico (recubrimiento a base de Sílice, Cuarzo y Titanio)."
        },
    
        {
          id: 2,
          nombre: "Renew car detail",
          precio: 30000,
          category: "servicios",
          imagen:"https://kilometrosquecuentan.goodyear.eu/wp-content/uploads/2020/07/car-detailing-pulido.jpg",
          descripcion:"El Renew Car es un servicio que reúne varias acciones necesarias para revalorizar tu vehículo.Está ideado para aquellos que han adquirido un coche de segunda mano y desean poder renovar su imagen y su higiene o para quienes desean vender su vehículo y aumentar su atractivo y valor. Con éste Pack completo integral su vehículo lucirá impecable por dentro y reluciente por fuera, un cambio imprescindible para quienes desean vender su vehículo rápidamente o para quienes desean poder estrenar su auto usado."
          }
        ]
      }}>
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
      </CartContext.Provider>
    </div>
  );
}


export default App;
