//import logo from './logo.svg';
import './App.css';
import Pozdrav from './Pozdrav';

function App() {
  return (
    <><div className="App">
      <header className="App-header">
        <h1>Dobrodošli na moj prvi React projekt!</h1>
        <p>Ovo je moja prva aplikacija u Reactu.</p>
        <Pozdrav ime = "Dario"></Pozdrav>
      </header>
    </div></>
  );
}


export default App;
