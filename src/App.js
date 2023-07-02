import './App.css';
import {WelcomeH2} from './Welcome'

function App() {
  return (
    <div className="App">
      <WelcomeH2 children="Hello World"/>
      <WelcomeH2>Woe kanjud</WelcomeH2>
    </div>
  );
}

export default App;
