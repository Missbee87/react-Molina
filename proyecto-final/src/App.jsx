import NavBar from './components/NavBar/NavBar';
import  Button from './components/Button';
import Input  from './components/Input/input';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  const extraerValor = (valorDelInput) => {
    return console.log(valorDelInput);
  }
  return (
    <div className="App">
      <NavBar/>
      <Button texto='Buscar' color='red' />
      <ItemListContainer greeting='BIENVENIDOS A ASG CAR DETAILING' />
      <Input handleExtraer={extraerValor}/>

      
    </div>
  );
}

export default App;
