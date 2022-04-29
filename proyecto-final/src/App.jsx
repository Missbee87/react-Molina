import NavBar from './components/NavBar/NavBar';
import  Button from './components/Button';


//import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  /*const extraerValor = (valorDelInput) => {
    return console.log(valorDelInput);
  }*/
  return (
    <div className="App">
      <header className='App-header'>
        <NavBar/>
      </header>
      <Button texto='Buscar' color='red' />
      <ItemDetailContainer/>
      
  
      
     
  </div>
  );
}

export default App;
