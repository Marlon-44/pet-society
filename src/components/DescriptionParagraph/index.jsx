import styled from "styled-components";

const Description = styled.p`
    font-size: 0.9rem;
    font-weight: 500;
    color: #302f2b;
    line-height: 1.5rem;
    width: 100%;

    @media screen and (min-width: 600px){
        font-size: 1.1rem;
        line-height: 2rem
    }
`

const DescriptionParagraph = ({text}) =>{
    return(
        <Description>{text}
        </Description>
    )
}

export default DescriptionParagraph;