import { useEffect, useState } from 'react';
import './css/BoardDetail.css';
import { useNavigate } from 'react-router-dom';
import { BoardDetailLoad,BoardDetailgood,BoardUserDelete } from './api/board'

export default function BoardDetail() {

    const navigate = useNavigate();

    const [userId, setUserId] = useState('');
    const [boardId, setBoardId] = useState('');
    const [boardItem, setBoardItem] = useState('');
    const [likeCount, setLikeCount] = useState('0');
    const [likeMessage,setLickMessage] = useState('👍'+ likeCount);

    function startBoardDetail() {
        
        let param = new Object();
        param.boardId = boardId;

        BoardDetailLoad(param)
        .then(res => {
             console.log(res);
             if(res.data.code == 200) {
                 console.log(res.data.data);
                 setBoardItem(res.data.data);
                 setLikeCount(res.data.data.boardGood);
             }
         })
    }

    useEffect(() => {
        const uid = localStorage.getItem('userId') || '';
        setUserId(uid);
        const storedBoardId = localStorage.getItem('boardIdx') || '';
        setBoardId(storedBoardId);
    }, []);
    
    useEffect(() => {
        if (boardId) {
            startBoardDetail();
        }
    }, [boardId]);

    useEffect(() => {
        setLickMessage('👍' + likeCount);
    }, [likeCount]);

    function formatDate(dateString) {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleString('ko-KR', options);
    }

    return (
        
    <div class="post_container">
        <div className="back_button_container">
            <input type="button" className="back_button" value="이전으로" onClick={
                ()=>{
                    navigate('/');
                }
            }/>
        </div>
        <div class="post_header">
            <h2 class="post_title">{boardItem.title}</h2>
        </div>
        <div class="post_meta">
            <span>작성자: {boardItem.memberId}</span>
            <span>작성일: {boardItem.createdAt ? formatDate(boardItem.createdAt) : 'N/A'}</span>
        </div>
        <div class="post_content">
            <p>
            {boardItem.content}
            </p>
        </div>
        <div class="post_actions">
            <div class="post_likes_comments">
                <input type='button' class="like_button" value={likeMessage} onClick={
                    ()=>{
                        let obj ={
                            'boardId' : boardId
                        };
                        BoardDetailgood(obj);
                        setLikeCount(likeCount + 1);
                    }
                }/>
            </div>
            {userId === boardItem.memberId && (
                <div class="post_menu">
                    <input type="button" class="edit_button" value="수정"/>
                    <input type="button" class="delete_button" value="삭제" onClick={
                        ()=>{
                            const isConfirmed = window.confirm("정말 삭제하시겠습니까?");
                            if (isConfirmed) {
                                alert("삭제되었습니다.");
                                let obj ={
                                    'boardId' : boardId
                                };
                                BoardUserDelete(obj);
                                navigate('/');
                                window.location.reload();
                              } 
                        }
                    }/>
                </div>
            )}
        </div>
    </div>

    )
}


