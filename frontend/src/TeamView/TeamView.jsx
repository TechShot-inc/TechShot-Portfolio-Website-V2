import "./TeamView.css"
import TeamMembers from "../TeamMembers/TeamMembers"
import judy from "../../assets/teamView/judy.jpg"
import winnie from "../../assets/teamView/winnie.jpeg"
import kungfu from "../../assets/teamView/kungfu.jpeg"
import wallE from "../../assets/teamView/wall-e.jpg"
import tamer from "../../assets/teamView/tamerhosny.jpg"
import timon from "../../assets/teamView/timon.jpeg"
import mike from "../../assets/teamView/mike.jpeg"
import dory from "../../assets/teamView/dory.jpeg"
import nemo from "../../assets/teamView/nemo.jpeg"

export default function TeamView() {
    return (
        <div className="team-view container">
            <h2 style={{ fontWeight: 'bold' }}>Team Members</h2>
            <blockquote>“The one who are crazy enough to think
                they can change the world,
                are the ones who do.” ~Steve Jobs</blockquote>
            <div className="row team-view-row">
                <TeamMembers name="Ahmed" image={tamer} />
            </div>
            <div className="row team-view-row">
                <TeamMembers name="Naggar" image={winnie} />
                <TeamMembers name="Marwan" image={wallE} />
                <TeamMembers name="Mariam" image={judy} />
                <TeamMembers name="Moatassem" image={timon} />
            </div>
            <div className="row team-view-row">
                <TeamMembers name="Youssef" image={nemo} />
                <TeamMembers name="Habiba" image={dory} />
                <TeamMembers name="Ziad" image={kungfu} />
                <TeamMembers name="Doma" image={mike} />
            </div>
        </div>
    )
}