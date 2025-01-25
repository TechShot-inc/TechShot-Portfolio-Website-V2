import "./TeamMembers.css";
import { ReactSVG } from "react-svg";
import frame from "../../assets/TeamMembers/frame.svg";
import { useNavigate } from 'react-router-dom';

export default function TeamMembers({ memberId, name, image }) {
    const navigate = useNavigate();
    return (
        <div className="frame-container">
            <ReactSVG
                src={frame}
                beforeInjection={(svg) => {
                    const foreign = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
                    foreign.setAttribute('x', '65');
                    foreign.setAttribute('y', '50');
                    foreign.setAttribute('width', '100');
                    foreign.setAttribute('height', '100');
                    foreign.setAttribute('class', 'foreign');
                    const memberImageContainer = document.createElement('div');
                    memberImageContainer.classList.add('team-member-image-container');
                    foreign.appendChild(memberImageContainer);

                    const memberImage = document.createElement('img');
                    memberImage.setAttribute('src', image);
                    memberImage.classList.add('team-member-image');
                    memberImageContainer.appendChild(memberImage);
                    svg.appendChild(foreign);

                    const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                    textElement.setAttribute('x', '50%');
                    textElement.setAttribute('y', '60%');
                    textElement.setAttribute('text-anchor', 'middle');
                    textElement.setAttribute('class', 'member-name');
                    textElement.textContent = name;
                    svg.appendChild(textElement);

                    const foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
                    foreignObject.setAttribute('x', '60');
                    foreignObject.setAttribute('y', '180');
                    foreignObject.setAttribute('width', '120');
                    foreignObject.setAttribute('height', '40');
                    foreignObject.setAttribute('class', 'foreign-object')

                    const profileButton = document.createElement('button');
                    profileButton.innerText = 'Profile';
                    profileButton.classList.add('profile-button');
                    profileButton.addEventListener('click', () => {
                        navigate(`/members/${memberId}`);
                    });
                    foreignObject.appendChild(profileButton);
                    svg.appendChild(foreignObject);

                    const hoverEffect = document.createElement('div');
                    hoverEffect.classList.add('hover-effect');
                    profileButton.appendChild(hoverEffect);

                    const divHover = document.createElement('div');
                    hoverEffect.appendChild(divHover);
                }}
            />
        </div>
    )
}