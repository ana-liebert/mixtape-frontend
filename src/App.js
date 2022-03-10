import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Discover from './components/Discover';
import Hosts from './components/Hosts';
import Auth from './components/Auth';






function App() {

  return (
    <div className="App">
      <Header />
      <Auth />
      <Main />
      <Discover />
      <Hosts />
    </div>
  );
}



export default App;
