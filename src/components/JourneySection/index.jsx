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
`
const JourneyContent = styled.div`
    width: 100%;
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
const LeftContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    gap: 20px;
`


const RightContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    gap: 20px;
`
const Image = styled.img`
    width: 50%;
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