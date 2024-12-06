import { useState } from 'react';
import './css/Top.css';

export default function Login() {

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    return (
        
        <div class="top">
        <div class="top-container">
          <div class="top-left">
            <h1 class="logo">My Board</h1>
          </div>
          <div class="top-right">
            {/* <span class="user-info">환영합니다, <b>홍길동</b>님!</span> */}
            <button class="login-button">로그인</button>
          </div>
        </div>
      </div>
    )
}


