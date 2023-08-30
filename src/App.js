import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TiempoConverter from './Conversor de tiempo/Tiempo-conversor.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tiempo-conversor" element={<TiempoConverter />} />
      </Routes>
      
    </Router>
  );
}

export default App;
