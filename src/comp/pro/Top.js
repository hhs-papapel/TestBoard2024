import { useState } from 'react';
import './css/Top.css';
import { useNavigate } from 'react-router-dom';

export default function Top() {

    const navigate = useNavigate();

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    return (
        
        <div class="top">
        <div class="top-container">
          <div class="top-left">
            <h1 class="logo" onClick={()=>{
                navigate('/');
            }}>My Board</h1>
          </div>

          <div class="top-right">
            {/* <span class="user-info">환영합니다, <b>홍길동</b>님!</span> */}
            <input type="button" value="로그인" class="login-button" onClick={()=>{
                navigate('/Login');
            }}/>
          </div>
        </div>
      </div>
    )
}


