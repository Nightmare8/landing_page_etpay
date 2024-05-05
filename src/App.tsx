import NavBar from '@sections/NavBar/index'
import LandingView from '@sections/LandingView/index'
import FeaturesView from '@sections/FeaturesView/index'
import ToolsView from '@sections/ToolsView/index'
import Footer from '@sections/Footer/index'
import './styles.css'

function App() {
  return (
    <div className='home_container'>
      <NavBar />
      <LandingView />
      <FeaturesView />
      <ToolsView />
      <Footer />  
    </div>
  )
}

export default App
