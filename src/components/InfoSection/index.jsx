import styled from "styled-components";
import Title from "../Title";
import { NutritionContext } from "../../Context/NutritionContext";
import { useContext } from "react";
import DescriptionParagraph from "../DescriptionParagraph";
import InformationItem from "../InformationItem";

const InformationContainer = styled.section`
    display: flex;
    width: 100%;
    padding: 50px;
`
const ImageSection = styled.div`
    width: 40%;
`
const InformationBox = styled.div`
    width: 50%;
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