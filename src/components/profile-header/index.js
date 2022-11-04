/*
*
* index.js
* @author - Jamal
* @date -  04 november 2022
*/
import Avatar from '../avatar';
import './style.css';

// USED TO PASS A VALUE 
function ProfileHeader(props) {
    return (
        <div className='story-slider-profile'>
            <Avatar imgName={props.userImg} width={32} className="story-slider-avatar" />
            <p className='username'>{props.userName}  {props.duration}</p>
            <div className='icons cell-1 only-desktop'>
                <i class="fa-solid fa-play a-icon"></i>
                <i class="fa-solid fa-volume-high a-icon"></i>
                <i class="fa-solid fa-ellipsis a-icon"></i>
            </div>
        </div>
    )
}

export default ProfileHeader;