import logo from './logo.svg';
import './App.css';

import ProLogin from './comp/pro/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<ProLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
