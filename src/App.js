import './App.css';
import Header from './components/Header';
import { Route, Routes } from "react-router-dom";
import Mixes from './pages/Mixes';
import Main from './components/Main';





function App() {

  return (
    <div className="App">
      <Header />
      <Main />
      {/* <Routes>
        <Route path="/mixes" element={<Main URL={URL} />} />
      </Routes> */}
    </div>
  );
}



export default App;
