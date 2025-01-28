import "./ProfileInfo.css"

export default function ProfileInfo({ image, name, email, github, linkedin }) {
    return (
        <div className="row align-items-center profile-info">
            {/* <div className="member-image-container col-lg-3 col-md-4 col-sm-12">
                <img src={image} className="member-image" />
            </div> */}
            <div className="profile-photo-container d-flex justify-content-center align-items-center">
                <img src={image} className="rounded-circle" style={{ width: '250px', height: '250px', objectFit: 'cover' }} />
            </div>
            <div className="info row container col-lg-8 col-md-9 col-sm-12">
                <h1 className="profile-name">{name}</h1>
                <span target="_blank" style={{ color: 'black', fontWeight: 'normal' }}>
                   <b>Email: </b> {email}
                </span>
                <a href={github} className="profile-link" target="_blank" style={{ color: 'black' }}>
                    Github
                </a>
                <a href={linkedin} className="profile-link" target="_blank" style={{ color: 'black' }}>
                    Linked In
                </a>
            </div>
        </div>
    )
}