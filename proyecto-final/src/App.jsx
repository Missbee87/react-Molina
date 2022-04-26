import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import  Button from './components/Button';
import Box from './components/ItemListContainer';
import Input  from './components/Input/input';
import Counter from './components/counter';





function App() {

  const extraerValor = (valorDelInput) => {
    return console.log(valorDelInput);
  }
  return (
    <div className="App">
      <NavBar/>
      <Button texto='Buscar' color='red' />
    
      <Box titulo='BIENVENIDOS A ASG CAR DETAILING' />

      
      <Input handleExtraer={extraerValor}/>

      
    </div>
  );
}

export default App;
