
import './App.css'
import './fonts/fonts.css'
import Header from './components/Header'
import Banner from './components/Banner'
import ServicesSection from './components/ServicesSection'
import Footer from './components/Footer'
import InfoSection from './components/InfoSection'
import { useContext } from 'react'
import { NutritionContext } from './Context/NutritionContext'

function App() {
  const {nutritionImage, nutritionTitle, nutritionDescription, nutritionItems} = useContext(NutritionContext);
  
  return (
    <>
      <Header/>
      <Banner/>
      <ServicesSection/>
      <InfoSection image={nutritionImage}
        title={nutritionTitle}
        description={nutritionDescription}
        items={nutritionItems}/>
      <Footer/>
    </>
  )
}

export default App
