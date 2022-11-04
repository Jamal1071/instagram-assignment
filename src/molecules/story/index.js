/*
*
* index.js
* @author - Jamal
* @date -  04 november 2022
*/
import { useState } from 'react';
import StoryList from '../../data/story.json'
import StorySlider from '../storyslider';
import Logo from '../../asset/logo.png';
import './style.css';

function Story(props) {

    // DECLARE LOCAL VARIABLE
    const [list, setList] = useState(StoryList);
    const [currentUserId, setCurrentUserId] = useState(props.userId);

    // USED TO SCROLL RIGHT SIDE OF THE STORY
    function rightScrollStory() {
        const right = document.querySelector(".story-cover");
        right.scrollBy(124, 0);
    }

    // USED TO CHANGE STORY ON USING A IF CONDITION
    function changeUserStory(id) {
        if (id !== 0) {
            setCurrentUserId(id);
            rightScrollStory();
        }
    }

    return (
        <div className='story-model'>
            <img className='logo only-desktop' src={Logo} height={33} />
            <i className="fa-solid fa-xmark close" onClick={() => props.onClose()}></i>
            <div className='story-cover'>
                <ul className='story-list'>
                    {list.map((item, index, elements) => (
                        <li key={index}>
                            <StorySlider leftScrollStory={() => changeUserStory(index !== 0 ? elements[index - 1].id : 0)} rightScrollStory={() => changeUserStory(index < elements.length - 1 ? elements[index + 1].id : 0)} openStory={() => changeUserStory(item.id)} onStoryUpdate={() => changeUserStory(index < elements.length - 1 ? elements[index + 1].id : 0)} currentUserId={currentUserId} id={item.id} storyImages={item.storyImages} userImg={item.userImg} duration={item.duration} userName={item.userName} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Story;