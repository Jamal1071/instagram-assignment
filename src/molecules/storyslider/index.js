/*
*
* index.js
* @author - Jamal
* @date -  04 november 2022
*/
import { useEffect, useState } from 'react';
import Avatar from '../../components/avatar';
import Bar from '../../components/bar';
import ProfileHeader from '../../components/profile-header';
import ProfileFooter from '../../components/profile-footer';
import './style.css';

function StorySlider(props) {

    // DECLARE LOCAL VARIABLE
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const isActive = props.id === props.currentUserId ? true : false;
    var timer;
    var imageIndex = 0;
    var totalImage = props.storyImages.length;

    // USED TO CHANGE IMAGE
    function changeImg() {
        if (totalImage > 1) {
            totalImage = totalImage - 1;
            imageIndex = imageIndex + 1;
            document.getElementById(`${props.id}-${imageIndex}`).classList.add('bar-line');
            setCurrentImgIndex(prev => prev + 1);
            timer = setTimeout(changeImg, 5000)
        } else {
            clearTimeout(timer);
            props.onStoryUpdate();
        }
    }
    
    // USED TO CHECK THE CONDITION TRUE OR NOT
    useEffect(() => {
        if (isActive === true) {
            document.getElementById(`${props.id}-${imageIndex}`).classList.add('bar-line');
            timer = setTimeout(changeImg, 5000)
        }
    }, [isActive])

    return (
        <div className={["story-slider-box", props.id === props.currentUserId ? "" : "inactive-story-box only-desktop"].join(" ")}>
            {isActive === true &&<i class="fa-solid fa-circle-chevron-left story-list-left only-desktop" ></i>}
            {isActive === true && <Bar storyImages={props.storyImages} id={props.id} />}
            {isActive === true && <ProfileHeader userImg={props.userImg} userName={props.userName} duration={props.duration} />}
            {isActive === true && <ProfileFooter userName={props.userName} />}
            {isActive === false && <Avatar imgName={props.userImg} width={56} className="inactive-story-avatar" />}
            <img className='h-image' src={require(`../../asset/story/${props.storyImages[currentImgIndex]}`)} height="100%" />
            {isActive === true &&<i class="fa-solid fa-circle-chevron-right story-list-right only-desktop" ></i>}
        </div>
    )
}

export default StorySlider;