import './App.css';
import Main from './components/Main';
import Discover from './components/Discover';
import Hosts from './components/Hosts';
import Authorization from './components/Authorization';






function App() {

  return (
    <div className="App">
      <Authorization />
      <Main />
      <Discover />
      <Hosts />
    </div>
  );
}



export default App;
