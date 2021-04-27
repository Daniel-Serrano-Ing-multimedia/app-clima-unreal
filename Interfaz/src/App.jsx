//import logo from './logo.svg';
import unreal from './assets/img/unreal.svg'
// components 
import ButtonReact from './components/ButtonReact';
// Funciones para Unreal
import  { tomarMartillo, visible } from './unrealComunications/martillo';
import { pronostico, defaultText } from './unrealComunications/hidromet';
//
// styles
import './App.css';

function App() {
  function pronisticoBocas ( ) {
    console.log('Boton')
    pronostico('Bocas del Toro') ;
  }
  function pronisticoPanama ( ) {
    console.log('Panamá')
    pronostico('Panamá') ;
  }
  function textoGenerico ( ) {
    console.log('Texto Prueba')
    defaultText('Texto Prueba') ;
  }
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
        <ButtonReact 
          unrealFunc = { () => pronisticoBocas}
          textButton = { 'pronostico Bocas del Toto' }
        />
        <ButtonReact 
          unrealFunc = { () => pronisticoPanama}
          textButton = { 'pronostico Panama' }
        />
        <ButtonReact 
          unrealFunc = { () => textoGenerico }
          textButton = { 'Default Text' }
        />
      </header>
    </div>
  );
}

export default App;
