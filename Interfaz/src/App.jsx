//import logo from './logo.svg';
import unreal from './assets/img/unreal.svg'
// components 
import ButtonReact from './components/ButtonReact';
// Funciones para Unreal
import  { tomarMartillo, visible } from './unrealComunications/martillo';
// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={unreal} className="App-logo" alt="logo" />
        <p>
         Pruebas Remote Control Unreal Engine 4
        </p>
        <ButtonReact 
          unrealFunc = { () => tomarMartillo }
          textButton = { 'Tomar Martillo' }
        />
        <ButtonReact 
          unrealFunc = { () => visible }
          textButton = { 'Hacer Visible' }
        />
      </header>
    </div>
  );
}

export default App;
