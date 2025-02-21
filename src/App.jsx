
import './App.css'
import './fonts/fonts.css'
import Header from './components/Header'
import Banner from './components/Banner'
import ServicesSection from './components/ServicesSection'
import Footer from './components/Footer'
import InfoSection from './components/InfoSection'
import { useContext } from 'react'
import { NutritionContext } from './Context/NutritionContext'
import { ServeContext } from './Context/ServeContext'
import JourneySection from './components/JourneySection'
import Advice from './components/Advice'

function App() {
  const {nutritionImage, nutritionTitle, nutritionDescription, nutritionItems} = useContext(NutritionContext);
  const {serveItems, serveTitle, serveDescription, serveImage} = useContext(ServeContext);
  return (
    <>
      <Header/>
      <Banner/>
      <ServicesSection/>
      <InfoSection image={nutritionImage}
        title={nutritionTitle}
        description={nutritionDescription}
        items={nutritionItems}
        orientation='left'/>

      <InfoSection image={serveImage}
        title={serveTitle}
        description={serveDescription}
        items={serveItems}
        orientation='right'/>
      <Advice/>
      <JourneySection/>
      <Footer/>
    </>
  )
}

export default App
