import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { NutritionProvider } from './Context/NutritionContext.jsx'
import { ServeProvider } from './Context/ServeContext.jsx'
import { JourneyProvider } from './Context/JourneyContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NutritionProvider>
      <ServeProvider>
        <JourneyProvider>
          <App />
        </JourneyProvider>
      </ServeProvider>
    </NutritionProvider>
  </StrictMode>,
)
