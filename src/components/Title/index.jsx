import styled from "styled-components";

const SectionName = styled.h2`
    font-family: 'Silk Display', sans-serif;
    font-size: 4rem;
    font-weight: 400;
`
const Title = ({text})=>{
    return(
        <SectionName>{text}
        </SectionName>
    )
}

export default Title;