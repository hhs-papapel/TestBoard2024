import { useState } from 'react';
import './css/BoardList.css';

export default function BoardList() {


    const [search, setSearch] = useState('');


    return (
        
    <div class="board_container">
        <h2>게시판</h2>

        <div className="search_container">
            <input type="text" placeholder="검색어를 입력하세요" className="search_input" value={search} onChange={
                e=>setSearch(e.target.value)
            }/>
            <input type="button" value="검색" className="search_button" />
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
            <tr>
            <td>1</td>
            <td>제목</td>
            <td>이름</td>
            <td>2024-12-06</td>
            <td>👍0</td>
            </tr>
            <tr>
            <td>2</td>
            <td>제목</td>
            <td>이름</td>
            <td>2024-12-06</td>
            <td>👍0</td>
            </tr>
        </tbody>
        </table>
        <input type='button' value="글쓰기" class="write_button" />
    </div>
    )
}
