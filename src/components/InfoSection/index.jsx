import styled from "styled-components";
import Title from "../Title";
import { NutritionContext } from "../../Context/NutritionContext";
import { useContext } from "react";
import DescriptionParagraph from "../DescriptionParagraph";
import InformationItem from "../InformationItem";

const InformationContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 50px;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 600px) {
        flex-direction: row;
    }
`
const ImageSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    @media screen and (min-width: 600px) {
        width:40%;
    }
`
const InformationBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    @media screen and (min-width: 600px) {
        width:40%;
    }
`
const InfoImage = styled.img`
    width: 80%;
`


const InfoSection = ({image, title, description, items}) =>{
    console.log('items', items)
    return(
        <InformationContainer>
            <ImageSection>
                <InfoImage src={image}/>
            </ImageSection>
            <InformationBox>
                <Title text={title}/>
                <DescriptionParagraph text={description}/>
                {
                    items.map((item) => (
                        <InformationItem key={item.id} info={item.itemText} />
                    ))
                }
            </InformationBox>
        </InformationContainer>
    )
}

export default InfoSection;