import './Resource.css'

import arrow from '../../assets/resource/arrow.svg'
function Resource({ image, description }) { 
    return (
        <article id='resource-container'>
            <div className="img-wrapper">  
                <img src={image} id='img' alt={description} />
            </div>
            <span>{description}</span> 
            <div id='button-container'>
                <button id='resource-button'>Read More</button>
                <img src={arrow} id='arrow' alt='Arrow icon' />
            </div>
        </article>
    );
}

export default Resource