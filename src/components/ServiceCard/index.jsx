import styled from "styled-components";
import DescriptionParagraph from "../DescriptionParagraph";

const Card = styled.div`
    min-width: 200px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    padding: 60px 0;
    border-top-left-radius: 150px;
    border-top-right-radius: 150px; 
    border-bottom-left-radius: 150px; 
    border-bottom-right-radius: 150px;
    text-align: center;
    @media screen and (min-width: 600px){
        width: 300px
    }
`;
const CardImage = styled.div`
    background-size: cover;
    background-position: center;
    border-radius: 100%;
    width: 100px;
    height:100px;
    @media screen and (min-width: 600px){
        width: 150px;
        height: 150px;
    }
`
const CardTitle = styled.h3`
    font-size: 1rem;
    color: #ff540c;
    font-weight: 800;

    @media screen and (min-width: 600px){
        font-size: 1.3rem;
    }
`
const DescriptionContainer = styled.div`
    width: 80%;
    @media screen and (min-width: 600px){
        widht: 100%
    }
`

const ServiceCard = ({img, title, description}) => {
    return(
        <Card>
            <CardImage style={{backgroundImage: `url(${img})`}}/>
            <CardTitle>{title}</CardTitle>
            <DescriptionContainer>
                <DescriptionParagraph text={description}/>
            </DescriptionContainer>
        </Card>
    )
}

export default ServiceCard;