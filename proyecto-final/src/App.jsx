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
      <Counter stock={5} initial={1}/>
      <Input handleExtraer={extraerValor}/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
