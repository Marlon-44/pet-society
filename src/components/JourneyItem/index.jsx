import styled from "styled-components";

const JourneyItemContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 100px;
    padding: 10px;
`
const ImageSection = styled.div`

`

const InfoSection = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 0 20px;
`

const InfoTitle = styled.h2`
    font-weight: bold;
    color: #ff540c;
    padding: 0;
    margin: 0;
`

const DescriptionParagraph = styled.p`
    margin-top: 10px;
    padding: 0;
    margin: 0;
`

const Image = styled.img`
    width: 50px;
    height: 50px;
    background-color: #ff540c;
    border-radius: 50%;
    padding: 0;
    margin: 0;
`
const JourneyItem = ({title, text, img}) => {
    return (
        <JourneyItemContainer>
            <ImageSection>
                <Image src={img} alt=''/>
            </ImageSection>
            <InfoSection>
                <InfoTitle>{title}</InfoTitle>
                <DescriptionParagraph>{text}</DescriptionParagraph>
            </InfoSection>
        </JourneyItemContainer>
    )
}

export default JourneyItem;