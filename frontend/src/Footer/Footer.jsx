import BGStrokes from "./BGStrokes.jsx";
import "./Footer.css"
import Wrapper from './Wrapper.jsx';
export default function Footer({ homeRef, projectsRef, teamRef, resourcesRef }) {
    return (
        /*         <div className="footerContainer">
         */
        <footer className='footer'>
            <Wrapper homeRef={homeRef}
                projectsRef={projectsRef}
                teamRef={teamRef}
                resourcesRef={resourcesRef} />
            <BGStrokes />

        </footer>
/*         </div>
 */    );
}

