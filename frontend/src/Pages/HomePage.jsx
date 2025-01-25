import LandingPage from '../LandingPage/LandingPage'
import ProjectsView from '../ProjectsView/ProjectsView'
import TeamView from '../TeamView/TeamView'
import ResourcesView from '../ResoursesView/ResoursesView'
//import Footer from '../Footer/Footer'
function HomePage() {
  return (
    <>
      <LandingPage />
      <ProjectsView />
      <TeamView />
      <ResourcesView />
      {/*       <Footer /> */}
    </>
  )
}

export default HomePage