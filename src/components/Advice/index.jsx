import styled from "styled-components";
import DescriptionParagraph from "../DescriptionParagraph";
import Button from "../Button";

const AdviceContainer = styled.section`
    display: flex;
    background-color: #ffc3c3;
    padding: 15px 50px ;
    width: 80%;
    margin: auto;
    border-radius: 50px;
    gap: 30px;
    overflow: hidden;
`
const ImagesContainer = styled.div`
    display: flex;
    gap: 50px;
    width: 65%;
`
const ImdAd = styled.img`
    max-width: 250px;
    height: 250px;
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const AdiviceTitle = styled.h2`
    font-size: 2rem;
    font-family: 'Silk Display', sans-serif;
    font-weight: 400;
    margin: 0;
`
const PawPrint = styled.img`
    width: 200px;
    right: 0;
    position: absolute;
    @media screen and (max-width: 600px){
        width: 150px;
    }
`
const ButtonSection = styled.div`
    width: 50%;
    
`

const Advice = () => {

    return (
        <AdviceContainer>
            <ImagesContainer>
                <ImdAd src="/assets/dog1.png"></ImdAd>
                <ImdAd src="/assets/dog2Info.png"></ImdAd>
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
            <PawPrint src='/assets/huella.png' />
        </AdviceContainer>
    )

}

export default Advice;