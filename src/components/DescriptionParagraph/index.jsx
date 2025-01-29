import styled from "styled-components";

const Description = styled.p`
    font-size: 1.1rem;
    font-weight: 500;
    color: #302f2b;
    line-height: 2rem;
    
`

const DescriptionParagraph = ({text}) =>{
    return(
        <Description>{text}
        </Description>
    )
}

export default DescriptionParagraph;