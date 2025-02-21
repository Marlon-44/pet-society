import { createContext } from "react";

export const JourneyContext = createContext();

export const JourneyProvider = ({ children }) =>{
    const journeyItemsL = [
        {id: 1, title: 'Experienced Professionals', text: 'Step-by-step guide', img:'' },
        {id: 2, title: 'Loving Enviroment', text: 'Step-by-step guide', img:'' },
        {id: 3, title: 'Comprehensive Services', text: 'Step-by-step guide', img:'' },
        ]
    const journeyItemsR = [
        {id: 1, title: 'Peace of Mind', text: 'Step-by-step guide', img:'' },
        {id: 2, title: 'Personalized Care', text: 'Step-by-step guide', img:'' },
        {id: 3, title: 'Curstomer Satisfaction', text: 'Step-by-step guide', img:'' }, ]
    
        return (
            <JourneyContext.Provider value={{journeyItemsL, journeyItemsR}}>
                {children}
            </JourneyContext.Provider>
        )
    

}