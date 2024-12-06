import { useState } from 'react';
import './css/Login.css';
import { LoginCheck } from './api/member'
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate();

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const loginAction = ()=>{
        if(id == '' || id == null || pw == '' || pw == null){
            alert("아이디나 비밀번호를 입력해주세요")
            return;
        }
        let obj = new Object();
        obj.userId = id;
        obj.userPw = pw;

        LoginCheck(obj)
        .then(res =>{
            if(res.data.data=='Y'){
                alert('성공!');
                localStorage.setItem('userId', id);

                window.dispatchEvent(new Event('userIdChange'));
                
                navigate('/');
            }else{
                setId('');
                setPw('');
                alert('아이디나 패스워드를 다시 확인해주세요!');
            }
        })
    }


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
        <input type="button" class="login_button" value="로그인" onClick={loginAction}/>

    </div>
    )
}


