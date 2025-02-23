import styled from "styled-components";
import Title from "../Title";
import { useContext } from "react";
import { JourneyContext } from "../../Context/JourneyContext";
import JourneyItem from "../JourneyItem";

const JourneyContainer = styled.section`
    max-width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    padding: 50px;
    justify-content: center;
    align-items: center;
`
const JourneyContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    @media screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
    }
`
const LeftContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    margin-top: 50px;
    @media screen and (min-width: 1024px) {
        margin-top: 0;
        width: 25%;
    }
`


const RightContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    @media screen and (min-width: 1024px) {
        
        width: 25%;
    }
`
const Image = styled.img`

    display: none;
    @media screen and (min-width: 1024px) {
        
        display: flex;
    }
`
const JourneySection = ()=>{
    const {journeyItemsL, journeyItemsR} = useContext(JourneyContext);
    return(
        <JourneyContainer>
            <Title text='Our Journey to Pet Life'/>
            <Title text='A Passion for Pets'/>
            <JourneyContent>
                <LeftContent>
                    {
                        journeyItemsL.map((item) => 
                        <JourneyItem key={item.id} title={item.title} text={item.text} img={item.img}/>)
                    }
                </LeftContent>
                <Image src='assets/4dogs.png'></Image>
                <RightContent>
                    {
                        journeyItemsR.map((item) => 
                        <JourneyItem key={item.id} title={item.title} text={item.text} img={item.img}/>)
                    }
                </RightContent>
            </JourneyContent>
        </JourneyContainer>
    )
}

export default JourneySection;