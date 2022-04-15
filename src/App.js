import './App.css';
import Discover from './components/Discover';
import Hosts from './components/Hosts';
import Authorization from './components/Authorization';


function App() {

  return (
    <div className="App">
      <Authorization />
      <Discover />
      <Hosts />
    </div>
  );
}



export default App;
