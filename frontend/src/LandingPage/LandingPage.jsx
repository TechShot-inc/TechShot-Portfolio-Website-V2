import './LandingPage.css'
import circle from '../../assets/landingPage/circle.svg'
import figure from '../../assets/landingPage/figure.svg'
import BtnContactUs from '../BtnContactUs/BtnContactUs';
//import BtnContactUs from '../BtnContactUs/BtnContactUs';

export default function LandingPage() {
    return (
        <div className="landing-container">
            <div className='left-part'>
                <img src={circle} className="circle"/>
                <div className='info-container'>
                    <span className="title-text">
                        Dream <b className="highlighted">Big</b> <br />
                        And Give it a <b className="highlighted">Shot</b>
                    </span>
                    <br />
                    <span>Dreams become reality when a team of talented minds comes together.</span>
                    <br />

                </div>
                <div className='button-div'>
                    <BtnContactUs />
                </div>
            </div>
            <div className="animation">
                <img src={figure} />
            </div>
        </div>
    );
}