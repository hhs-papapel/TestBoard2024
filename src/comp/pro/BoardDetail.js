import { useState } from 'react';
import './css/BoardDetail.css';

export default function Login() {

    const [likeCount, setLikeCount] = useState('👍0');

    return (
        
    <div class="post_container">
        <div className="back_button_container">
            <input type="button" className="back_button" value="이전으로"/>
        </div>
        <div class="post_header">
            <h2 class="post_title">Lorem ipsum dolor sit amet</h2>
        </div>
        <div class="post_meta">
            <span>작성자: gptrumo</span>
            <span>작성일: 2024-12-06</span>
            <span>수정일: 2024-12-06</span>
        </div>
        <div class="post_content">
            <p>
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
            It is a paradisematic country, in which roasted parts of sentences fly into your mouth...
            </p>
        </div>
        <div class="post_actions">
            <div class="post_likes_comments">
                <input type='button' class="like_button" value={likeCount}/>
            </div>
            <div class="post_menu">
                <input type="button" class="edit_button" value="수정"/>
                <input type="button" class="delete_button" value="삭제"/>
            </div>
        </div>
    </div>

    )
}


