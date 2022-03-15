import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Discover from './components/Discover';
import Hosts from './components/Hosts';
import Authorization from './components/Authorization';

// import Register from './components/Register';
// import Login from './components/Login';
// import Logout from './components/Logout';
// import { Route, Routes } from 'react-router-dom';






function App() {

  return (
    <div className="App">
      <Header />
      <Authorization />
      <Main />
      <Discover />
      <Hosts />
    </div>
  );
}



export default App;
