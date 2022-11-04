/*
*
* index.js
* @author - Jamal
* @date -  04 november 2022
*/
import './style.css'

// USED TO PASS A VALUE 
function ProfileFooter(props) {
    return (
        <div className='story-comments'>
            <input type="text" placeholder={"Reply to ".concat(props.userName)} />
            <div class="cell-1 footer-icons">
                <i class="fa-regular fa-heart"></i> <i class="fa-regular fa-paper-plane"></i>
            </div>
        </div>
    )
}

export default ProfileFooter;