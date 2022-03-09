import './App.css';
import Header from './components/Header';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';





function App() {
  const URL = "http://localhost:8000/mixtape/";

  return (
    <div className="App">
      <Routes>
        <Route path="/mixes" element={<Home URL={URL} />} />
      </Routes>
    </div>
  );
}



export default App;
