/*
*
* index.js
* @author - Jamal
* @date -  04 november 2022
*/
import './style.css';

// USED TO PASS A VALUE
function Avatar(props) {
    return (
        <img src={require(`../../asset/user/${props.imgName}`)} alt="profile pic" width={props.width} className={props.className} />
    )
}

export default Avatar;