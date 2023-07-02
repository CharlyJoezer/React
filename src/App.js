import './App.css';
import Button from './Button'

function App() {
  return (
    <div className="App">
      {/* src wajib menggunakan / diawal */}
      <img src="/logo512.png" alt='image'/>

      {/* Src salah */}
      <img src="logo512.png" alt='image'/> 
    </div>
  );
}

export default App;
