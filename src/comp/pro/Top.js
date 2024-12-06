import { useEffect, useState } from 'react';
import './css/Top.css';
import { useNavigate } from 'react-router-dom';

export default function Top() {

    const navigate = useNavigate();

    const [userId, setUserId] = useState(localStorage.getItem('userId') || '');

    useEffect(() => {
        const handleStorageChange = () => {
            setUserId(localStorage.getItem('userId') || '');
        };

        window.addEventListener('userIdChange', handleStorageChange);

        return () => {
            window.removeEventListener('userIdChange', handleStorageChange);
        };
    }, []);


    return (
        
        <div class="top">
        <div class="top-container">
          <div class="top-left">
            <h1 class="logo" onClick={()=>{
                navigate('/');
            }}>My Board</h1>
          </div>

          <div class="top-right">
          {userId ? (
                        <span className="user-info">
                            환영합니다, <b>{userId}</b>님!
                            <input
                            type="button" value="로그아웃" className="login-button" onClick={() => {
                                localStorage.removeItem('userId');
                                setUserId('');
                                navigate('/');
                            }}
                        />
                        </span>
                    ) : (
                        <input
                            type="button" value="로그인" className="login-button" onClick={() => {
                                navigate('/Login');
                            }}
                        />
                    )}
          </div>
        </div>
      </div>
    )
}


