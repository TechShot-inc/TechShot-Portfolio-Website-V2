import './ResoursesView.css'
import Resource from "../Resource/Resource"
import ResourceModel from './ResourceModel';
import pic1 from '../../assets/resourcesView/gilmour.jpg'
import pic2 from '../../assets/resourcesView/bowie.jpg'
import pic3 from '../../assets/resourcesView/moore.jpg'
import pic4 from '../../assets/resourcesView/ray_vaughan.jpg'
import pic5 from '../../assets/resourcesView/slash.jpg'
import pic6 from '../../assets/resourcesView/clapton.jpg'
import pic7 from '../../assets/resourcesView/hendrix.jpg'

function ResourcesView() {

    const resources = [
        new ResourceModel(pic2, 'David Bowie'),
        new ResourceModel(pic1, 'David Gilmour'),
        new ResourceModel(pic3, 'Gary Moore'),
        new ResourceModel(pic4, 'Stevie Ray Vaughan'),
        new ResourceModel(pic5, 'Slash'),
        new ResourceModel(pic6, 'Eric Clapton'),
        new ResourceModel(pic7, 'Jimi Hendrix')
    ];

    return (
        <div id='resources-view-container'>
            <h3>Featured</h3>
            <h2>Resources</h2>
            <div id='resources-container' className="scroll-container">
                {resources.map((resource, index) => (
                    <Resource
                        key={index}
                        image={resource.image}
                        description={resource.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default ResourcesView