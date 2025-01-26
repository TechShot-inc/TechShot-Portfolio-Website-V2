import "./ProfileInfo.css"

export default function ProfileInfo({ image, name, email, github, linkedin }) {
    return (
        <div className="row align-items-center profile-info">
            <div className="member-image-container col-lg-3 col-md-4 col-sm-12">
                <img src={image} className="member-image" />
            </div>
            <div className="info row container col-lg-8 col-md-9 col-sm-12">
                <h1 className="profile-name">{name}</h1>
                <a href={email} target="_blank" style={{ color: 'black', fontWeight: 'normal', 'text-decoration': 'underline' }}>
                    {email}
                </a>
                <a href={github} target="_blank" style={{ color: 'black', fontWeight: 'normal', 'text-decoration': 'underline' }}>
                    Github
                </a>
                <a href={linkedin} target="_blank" style={{ color: 'black', fontWeight: 'normal', 'text-decoration': 'underline' }}>
                    Linked In
                </a>
            </div>
        </div>
    )
}