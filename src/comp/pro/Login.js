import { useState } from 'react';
import './css/Login.css';

export default function Login() {

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    return (
        
    <div class="login_container">
        <h2>로그인</h2>
        <div class="input_group">
            <label for="username">아이디</label>
            <input type="text" value={id} onChange={
                e=> setId(e.target.value)
            }/>
        </div>
        <div class="input_group">
            <label for="password">비밀번호</label>
            <input type="password" value={pw} onChange={
                e=> setPw(e.target.value)
            }/>
        </div>
        <input type="button" class="login_button" value="로그인" />

    </div>
    )
}


