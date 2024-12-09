import { useEffect, useState } from 'react';
import './css/BoardWrite.css';
import { useNavigate } from 'react-router-dom';
import { BoardDetailLoad,BoardUserUpdate } from './api/board'

export default function BoardUpdate() {

    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [userId, setUserId] = useState('');
    const [boardId, setBoardId] = useState('');
    const [content, setContent] = useState('');

    function startBoardDetail() {
        
        let param = new Object();
        param.boardId = boardId;

        BoardDetailLoad(param)
        .then(res => {
             console.log(res);
             if(res.data.code == 200) {
                 console.log(res.data.data);
                 setTitle(res.data.data.title);
                 setContent(res.data.data.content);
             }
         })
    }

    useEffect(() => {
        const uid = localStorage.getItem('userId') || '';
        setUserId(uid);
        const storedBoardId = localStorage.getItem('boardIdx') || '';
        setBoardId(storedBoardId);
    }, [])
    
    useEffect(() => {
        if (boardId) {
            startBoardDetail();
        }
    }, [boardId]);


    return (
        
        <div className="write_container">
            <div className="back_button_container">
                <input
                    type="button" className="back_button" value="이전으로" onClick={() => {
                        navigate('/BoardDetail');
                    }}
                />
            </div>
            <h2 className="write_title">게시글 수정</h2>
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
                    <input type="button" value="수정" className="submit_button" onClick={
                        ()=>{
                            let obj ={
                                'boardId' : boardId,
                                'title' : title,
                                'content' : content,
                                'memberId' : userId
                            };
                            BoardUserUpdate(obj);
                            navigate('/BoardDetail');
                            window.location.reload();
                        }
                    }
                    />
                </div>
            </div>
        </div>

    )
}


