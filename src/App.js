import logo from './logo.svg';
import './App.css';

import ProTop from './comp/pro/Top'

import ProLogin from './comp/pro/Login'
import ProBoardList from './comp/pro/BoardList'
import ProBoardDetail from './comp/pro/BoardDetail'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ProTop/>
      <BrowserRouter>
        <Routes>
          <Route path={"/Login"} element={<ProLogin />} />
          <Route path={"/"} element={<ProBoardList />} />

          <Route path={"/BoardDetail"} element={<ProBoardDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
