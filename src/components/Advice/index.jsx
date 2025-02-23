import styled from "styled-components";
import DescriptionParagraph from "../DescriptionParagraph";
import Button from "../Button";

const AdviceContainer = styled.section`
        display: flex;
        flex-direction: column;
        background-color: #ffc3c3;
        justify-content: center;
        align-items: center;
        padding: 15px 50px;
        width: 75%;
        margin: auto;
        border-radius: 50px;
        gap: 50px;
        overflow: hidden;
        @media screen and (min-width: 600px){
            flex-direction: row;
            width: 80%;
            
        }
    
    
`
const ImagesContainer = styled.div`
    display: flex;
    gap: 50px;
    width: 100%;
    justify-content: center;
    @media screen and (min-width: 600px){
        
        width: 65%;
        
    }
`
const ImdAd = styled.img`
    max-width: 250px;
    height: 250px;
    display: none;
    @media screen and (min-width: 1024px){
        
        display: block;
        
    }
`
const ImdAd1 = styled.img`
    max-width: 250px;
    height: 250px;
    @media screen and (min-width: 600px){
        
        max-width: 400px;
        height: 400px;
        
    }
    @media screen and (min-width: 1024px){
        
        max-width: 250px;
        height: 250px;
        
    }
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    widht: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    @media screen and (min-width: 600px){
        
        width: 35%;
        
    }
`
const AdiviceTitle = styled.h2`
    font-size: 2rem;
    font-family: 'Silk Display', sans-serif;
    font-weight: 400;
    margin: 0;
`

const ButtonSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;

    @media screen and (min-width: 600px){
        
        width: 35%;
        
    }
    
`

const Advice = () => {

    return (
        <AdviceContainer>
            <ImagesContainer>
                <ImdAd src="/assets/dog1.png"></ImdAd>
                <ImdAd1 src="/assets/dog3.png"></ImdAd1>
                <ImdAd src="/assets/dog3.png"></ImdAd>
            </ImagesContainer>
            <InfoContainer>
                <AdiviceTitle >Your Pet Will Be</AdiviceTitle>
                <AdiviceTitle >Extremely Happy With Us</AdiviceTitle>
                <DescriptionParagraph text=' lorem ipsum dolor sit amet nosequevainan etc etc etc'/>
                <ButtonSection>
                    <Button text='Explore'/>
                </ButtonSection>
            </InfoContainer>
        </AdviceContainer>
    )

}

export default Advice;