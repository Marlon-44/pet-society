import styled from "styled-components";

const SectionName = styled.h2`
    font-family: 'Silk Display', sans-serif;
    font-size: 2.5rem;
    font-weight: 400;
    text-align: center;
    @media screen and (min-width: 600px){
        font-size: 4rem;
    }

`
const Title = ({text})=>{
    return(
        <SectionName>{text}
        </SectionName>
    )
}

export default Title;