import logo from './logo.svg';
import './App.css';

import ProTop from './comp/pro/Top'

import ProLogin from './comp/pro/Login'
import ProBoardList from './comp/pro/BoardList'
import ProBoardDetail from './comp/pro/BoardDetail'
import ProBoardWrite from './comp/pro/BoardWrite'
import ProBoardUpdate from './comp/pro/BoardUpdate'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProTop/>
        <Routes>
          <Route path={"/Top"} element={<ProTop />} />

          <Route path={"/Login"} element={<ProLogin />} />
          <Route path={"/"} element={<ProBoardList />} />

          <Route path={"/BoardDetail"} element={<ProBoardDetail />} />
          
          <Route path={"/BoardWrite"} element={<ProBoardWrite />} />
          
          <Route path={"/BoardUpdate"} element={<ProBoardUpdate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
