import styled from "styled-components";
import Button from "../Button";

const HeaderContainer = styled.header`
    width: 100vw;
    top: 0;
`

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    width: 100%;

    @media screen and (min-width: 600px) {
        justify-content: space-evenly;
    }
`
const IconLabel = styled.label`

    color: #ff540c;
    font-size: 1.1rem;
    font-weight: 600;
    @media screen and (min-width: 600px) {
    
        font-size: 1.4rem;
        font-weight: 700;
    }
    
`
const Logo = styled.img`
    width: 40px;

    @media screen and (min-width: 600px){
    width: 60px;}
`
const LogoSection = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`

const BurgerMenu = styled.img`
    display: flex;
    width: 25px;
    @media screen and (min-width: 600px) {
        display: none;
        
    }
`

const HeaderList = styled.ul`
    display: none;
    @media screen and (min-width: 600px) {
        list-style: none;
        display: flex;
        gap: 30px;
    }
`
const Anchor = styled.li`
    text-decoration: none;
    color: #302f2b;
    font-weight: 600;
`
const SignUpBtn = styled.button`
    display: none;
    @media screen and (min-width: 600px) {
        padding: 35px 40px 45px;
        height: auto;
        color: white;
        display: flex;
        cursor: pointer;
        transition: transform 0.2s;
        clip-path: polygon(4% 23%, 2% 26%, 2% 57%, 2% 62%, 3% 65%, 5% 67%, 50% 62%, 80% 68%, 84% 68%, 89% 66%, 92% 62%, 93% 58%, 93% 52%, 92% 30%, 92% 27%, 90% 24%, 86% 23%, 45% 29%, 11% 21%, 8% 21%);
        text-align: center;
        font-weight: 700;
        background-color: #302f2b;
        color: #fff;
    }
`
const Header = ()=>{
    return(
        <HeaderContainer>
            <Nav>
                <LogoSection>
                    <Logo src="./assets/logo.svg" alt="" />
                    <IconLabel>PetSociety</IconLabel>
                </LogoSection>
                <BurgerMenu src="assets/menu.svg" alt=""/>
                <HeaderList>
                    <li>
                        <Anchor>Home</Anchor>
                    </li>
                    <li>
                        <Anchor>Collection</Anchor>
                    </li>
                    <li>
                        <Anchor>About</Anchor>
                    </li>
                    <li>
                        <Anchor>Service</Anchor>
                    </li>
                </HeaderList>
                <SignUpBtn>Sign Up</SignUpBtn>
            </Nav>
        </HeaderContainer>
    )
}

export default Header;