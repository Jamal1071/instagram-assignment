/*
*
* index.js
* @author - Jamal
* @date -  04 november 2022
*/
import './style.css'

// USED TO PASS VALUE
function Bar(props) {
    return (
        <div className='story-slider-bar-container'>
            {props.storyImages.map((item, index) => (
                <div key={index} class="story-slider-bar"><div id={`${props.id}-${index}`}></div></div>
            ))}
        </div>
    )
}

export default Bar;