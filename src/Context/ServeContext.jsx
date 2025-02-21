import { createContext } from "react";


export const ServeContext = createContext();

export const ServeProvider = ({children}) =>{
    const serveItems = [
        {id: 1, itemText: 'Personalized care' },
        {id: 2, itemText: 'Regular eterinary Check-ups' },
        {id: 3, itemText: 'Exercise and mental stimulation' },
    ]
    const serveTitle = 'How we Serve Our Pet Parrents';
    const serveDescription = 'lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque non impedit laborum ad debitis, sint quia expedita, adipisci, suscipit minima quod nisi odio est.';
    const serveImage = 'assets/dog2Info.png';
    return(
        <ServeContext.Provider value={{serveItems, serveTitle, serveDescription, serveImage}}>
            {children}
        </ServeContext.Provider>
    )
}