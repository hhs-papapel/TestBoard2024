import { useEffect, useState } from 'react';
import './css/BoardWrite.css';
import { useNavigate } from 'react-router-dom';
import { BoardUserWrite } from './api/board'

export default function BoardWrite() {

    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [userId, setUserId] = useState('');
    const [content, setContent] = useState('');


    useEffect(() => {
        const uid = localStorage.getItem('userId') || '';
        setUserId(uid);
    }, [])

    return (
        
        <div className="write_container">
            <div className="back_button_container">
                <input
                    type="button" className="back_button" value="이전으로" onClick={() => {
                        navigate('/');
                    }}
                />
            </div>
            <h2 className="write_title">게시글 작성</h2>
            <div className="write_form">
                <input type="text" placeholder="제목을 입력하세요" className="write_input" value={title} onChange={
                    (e) => setTitle(e.target.value)
                }
                />
                <input type="text" className="write_input" value={userId} readOnly/>
                <textarea className="write_textarea" placeholder="내용을 입력하세요" value={content} onChange={
                    (e) => setContent(e.target.value)
                }
                ></textarea>
                <div className="write_actions">
                    <input type="button" value="등록" className="submit_button" onClick={
                        ()=>{
                            let obj ={
                                'title' : title,
                                'content' :content,
                                'memberId' : userId
                            };
                            console.log(obj);
                            BoardUserWrite(obj);
                            navigate('/');
                            window.location.reload();
                        }
                    }
                    />
                </div>
            </div>
        </div>

    )
}


