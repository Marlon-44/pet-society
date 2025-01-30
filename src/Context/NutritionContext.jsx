import { createContext } from "react";


export const NutritionContext = createContext();

export const NutritionProvider = ({children})=>{
    const nutritionItems = [
        {id: 1, itemText: 'Personalized Nutrition Plan' },
        {id: 2, itemText: 'Regular Veterinary Check-ups' },
        {id: 3, itemText: 'Exercise and Mental Stimulation' },
    ]
    const nutritionTitle = 'Nutritional Food And Healty Pets';
    const nutritionDescription = 'lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque non impedit laborum ad debitis, sint quia expedita, adipisci, suscipit minima quod nisi odio est.';
    const nutritionImage = 'assets/dog1Info.png';
    return(
        <NutritionContext.Provider value={{nutritionItems, nutritionTitle, nutritionDescription, nutritionImage}}>
            {children}
        </NutritionContext.Provider>
    )
}