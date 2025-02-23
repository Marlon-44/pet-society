import styled from "styled-components";
import DescriptionParagraph from "../DescriptionParagraph";
import Button from "../Button";

const BannerSection = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    margin-top: 30px;
    overflow-x: hidden;
    `

const FootPrintDecoration__left = styled.img`
    position: absolute;
    width: 150px;
    left:-50px;
    top: 50px;
    rotate: 120deg;
    z-index: -1;

    @media screen and (min-width: 600px){
        width: 200px;
        left:-100px;
        top: 50px;
    }
    
`
const FootPrintDecoration__right = styled.img`
    position: absolute;
    width: 150px;
    rotate: -70deg;
    right: -60px;
    top: 300px;
    z-index: -1;

    @media screen and (min-width: 600px){
        width: 150px;
        right: -10px;
        top: 300px;
    }
`
const InfoContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
    padding: 0 20px;
    @media screen and (min-width: 600px){
        width: 50%;
        
    }
    

`

const BannerTitle = styled.h1`
        font-family: 'Silk Display', sans-serif;
        display: flex;
        align-items: center;
        gap: 10px;
        letter-spacing: 0.2rem
        margin: 0;
        padding: 0;
        font-size: 1.8rem;
        font-weight: 400;

        @media screen and (min-width: 600px){
            font-size: 3.8rem;
            font-weight: 400;
        }
    
`
const DogIcon = styled.img`
    width: 40px;
    @media screen and (min-width: 600px){
        width: 60px
    }
`
const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`
const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 50px;
    flex: 1 1 0;
`
const Dog1 = styled.img`
    position: relative;
    max-width: 300px;
    right: 0px;
    top: -100px;
    z-index: -1;
    display: none;
    
    @media screen and (min-width: 1024px){
        max-width: 400px;
        display: flex;
    }`
const Dog2 = styled.img`
    position: relative;
    max-width: 400px;
    right: 0px;
    top: -50px;
    z-index: -1;
    display: none;
    @media screen and (min-width: 1024px){
        display: flex;
    }
`
const Dog3 = styled.img`
    position: relative;
    max-width: 300px;
    right: 0px;
    top: -30px;
    z-index: -1;
    @media screen and (min-width: 600px){
        max-width: 400px;
    }
    @media screen and (min-width: 1024px){
        max-width: 400px;
        top: -100px;
    }
`

const Banner = ()=>{
    return(
        <BannerSection>
            <FootPrintDecoration__left src="assets/huella.png" alt="" />
            <InfoContainer>
                <TitleContainer>
                    <BannerTitle><DogIcon src="assets/cat.svg" alt="" />Professional Stress</BannerTitle> 
                    <BannerTitle>Free-Pet Care Experience</BannerTitle>
                </TitleContainer>   
                <DescriptionParagraph text ='Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Eaque non impedit laborum ad debitis, sint quia 
                expedita, adipisci, suscipit minima quod nisi odio est.'/>
                <Button text = 'GET STARTED' ></Button>
            </InfoContainer>
            <ImageContainer>
                <Dog1 src="assets/dog1.png" alt=""></Dog1>
                <Dog2 src="assets/dog2.png" alt=""></Dog2>
                <Dog3 src="assets/dog3.png" alt=""></Dog3>
            </ImageContainer>
            
        </BannerSection>
    )
}

export default Banner;