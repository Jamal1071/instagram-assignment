/*
*
* index.js
* @author - Jamal
* @date -  04 november 2022
*/
import { useState } from 'react';
import UserList from '../../data/user.json';
import Story from '../../molecules/story';
import Avatar from '../../components/avatar';
import './style.css';

function HomePage() {

    // DECLARE LOCAL VARIABLE
    const [userId, setUserId] = useState('');
    const [list, setList] = useState(UserList);
    const [isOpen, setOpen] = useState(false);
    
    // USED TO OPEN A STORY
    function openStory(id) {
        setOpen(true)
        setUserId(id)
    }

    // USED TO CLOSE STORY
    function closeStory() {
        setOpen(false)
    }

    // USED TO SCROLL LEFT OF THE STORY
    function leftScrollStory() {
        const left = document.querySelector(".story-container");
        left.scrollBy(-200, 0);
    }

    // USED TO SCROLL RIGHT OF THE STORY
    function rightScrollStory() {
        const right = document.querySelector(".story-container");
        right.scrollBy(200, 0);
    }

    return (
        <div className='cover'>
            <i class="fa-solid fa-circle-chevron-left story-left only-desktop" onClick={() => leftScrollStory()}></i>
            <div className="story-container">
                <ul className="user-list">
                    {list.map((item, index) => (
                        <li key={index} onClick={() => openStory(item.id)}>
                            <Avatar imgName={item.imgName} width={56} />
                            <label className='title'>{item.username}</label>
                        </li>
                    ))}
                </ul>
                {isOpen && <Story userId={userId} onClose={() => closeStory()} />}
            </div>
            <i class="fa-solid fa-circle-chevron-right story-right only-desktop" onClick={() => rightScrollStory()}></i>
        </div>
    )
}

export default HomePage;