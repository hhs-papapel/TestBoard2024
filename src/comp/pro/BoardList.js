import { useEffect, useState } from 'react';
import './css/BoardList.css';
import { BoardListLoad } from './api/board'
import { useNavigate } from 'react-router-dom';

export default function BoardList() {

    const navigate = useNavigate();

    const [search, setSearch] = useState('');
    const [search2, setSearch2] = useState('');
    const [boardItems, setBoardItems] = useState([]);

    function startBoardList(seachBoard) {
        BoardListLoad(seachBoard)
        .then(res => {
            if(res.data.code == 200) {
                setBoardItems(res.data.data);
            }
        })
    }

    useEffect(() => {
        startBoardList();
    }, [])

    useEffect(() => {
        let param = new Object();
        param.keyword = search;
        param.created = search2;

        startBoardList(param);
    }, [search,search2])



    return (
        
    <div class="board_container">
        <h2>게시판</h2>

        <div className="search_container">
            <input type="text" placeholder="제목을 입력하세요" className="search_input" value={search} onChange={
                e=>setSearch(e.target.value)
            }/>
            <input type="text" placeholder="작성자를 입력하세요" className="search_input" value={search2} onChange={
                e=>setSearch2(e.target.value)
            }/>
        </div>

        <table class="board_table">
        <thead>
            <tr>
            <th>No</th>
            <th>제목</th>
            <th>글쓴이</th>
            <th>작성일자</th>
            <th>추천</th>
            </tr>
        </thead>
        <tbody>
            {boardItems.map((board) => (
                
                <tr onClick= {()=>{
                    localStorage.setItem('boardIdx', board.boardIdx);
                    navigate('/BoardDetail');
                }}>
                    <td>{board.boardIdx}</td>
                    <td>{board.title}</td>
                    <td>{board.memberId}</td>
                    <td>{new Date(board.createdAt).toLocaleString()}</td>
                    <td>👍{board.boardGood}</td>
                </tr>
            ))}
        </tbody>
        </table>
        <input type='button' value="글쓰기" class="write_button" onClick={
            ()=>{
                if(localStorage.getItem('userId')){
                    navigate('/BoardWrite');
                }else{
                    alert('로그인 후 사용이 가능합니다.');
                    navigate('/Login');
                }
            }
        }/>
    </div>
    )
}
