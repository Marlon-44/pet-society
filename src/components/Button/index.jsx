import styled from "styled-components"

const ButtonSculpted = styled.button`
    padding: 35px 40px 45px;
    height: auto;
    color: white;
    display: flex;
    cursor: pointer;
    transition: transform 0.2s;
    clip-path: polygon(4% 23%, 2% 26%, 2% 57%, 2% 62%, 3% 65%, 5% 67%, 50% 62%, 80% 68%, 84% 68%, 89% 66%, 92% 62%, 93% 58%, 93% 52%, 92% 30%, 92% 27%, 90% 24%, 86% 23%, 45% 29%, 11% 21%, 8% 21%);
    text-align: center;
    font-weight: 700;
`

const Button = ({text, isDark})=>{
    let backgroundColor__= '#ff540c';
    if(!!isDark){
        backgroundColor__='#000000';
    }
    return(
        <ButtonSculpted style={{backgroundColor: `${backgroundColor__}`}}>
            {text}
        </ButtonSculpted>
    )
}

export default Button;