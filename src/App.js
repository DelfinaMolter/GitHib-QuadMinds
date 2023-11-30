import logo from './img/logo.png';
import './App.css';

function App() {
  const number = '11'
  console.log(number.padStart(2, '0'))    
  return (
    <div className="flex flex-col items-center justify-center min-h-screen" >
      <header>
        <img src={logo}  alt="logo" />
        <h1 class="text-3xl font-bold text-white">
          Hello world!
        </h1>
      </header>
    </div>
  );
}

export default App;
