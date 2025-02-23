import styled from "styled-components";

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    gap:30px;
    background-color: #ffc3c3;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    text-aling: center;
    padding: 50px 20px;
    bottom: 0;
    @media screen and (min-width: 600px){
        flex-direction: row;
        gap: 50px;
        padding: 50px 20px;
    }
`
const FooterSection = styled.div`
    display: none;
    flex-direction: column;
    gap:20px;

    @media screen and (min-width: 600px){
        display: flex;
    }
`
const ListSection = styled.div`
    display: flex;
    gap: 40px;
`
const FooterList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 190px;
`
const ListTitle = styled.h3`
    font-size: 1.5rem;
    display: block;
`
const LogoSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`
const IconList = styled.div`
    display: flex;
    gap: 10px;
`
const SocialIcon = styled.img`
    width: 30px;
`
const ListItem = styled.li`
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
`
const FooterLogo = styled.img`
    width: 60px;
`
const FooterMainTitle = styled.h2`
    font-size: 1.5rem;
    color: #ff540c;
`
const PawPrintFooter = styled.img`
    position: absolute;
    rotate: -70deg;
    width: 250px;
    right: -150px;

`
const Footer = () => {
    return (
        <FooterContainer>
            <FooterSection>
                <ListTitle>Useful Links</ListTitle>
                <ListSection>
                    <FooterList>
                        <ListItem><a href="#">Home</a></ListItem>
                        <ListItem><a href="#">Team</a></ListItem>
                        <ListItem><a href="#">Collection</a></ListItem>
                    </FooterList>
                    <FooterList>
                        <ListItem><a href="#">About</a></ListItem>
                        <ListItem><a href="#">Blog</a></ListItem>
                        <ListItem><a href="#">Service</a></ListItem>
                    </FooterList>
                </ListSection>
                
            </FooterSection>

            <LogoSection>
                <FooterLogo src='assets/logo.svg'></FooterLogo>
                <FooterMainTitle>PetSociety</FooterMainTitle>
                <p>Leave your pets in the hands of professionals</p>
                <IconList>
                    <SocialIcon src='assets/facebook.svg'/>
                    <SocialIcon src='assets/x.svg'/>
                    <SocialIcon src='assets/instagram.svg'/>
                </IconList>
            </LogoSection>

            <FooterSection>
                <ListTitle>Working Hours</ListTitle>
                <ListSection>
                    <FooterList>
                        <ListItem><a href="#">Mon - Fri: </a></ListItem>
                        <ListItem><a href="#">Saturday:</a></ListItem>
                        <ListItem><a href="#">Sunday:</a></ListItem>
                    </FooterList>
                    <FooterList>
                        <ListItem><a href="#">9am - 4pm</a></ListItem>
                        <ListItem><a href="#">7am - 6pm</a></ListItem>
                        <ListItem><a href="#">Closed</a></ListItem>
                    </FooterList>
                </ListSection>
            </FooterSection>
            
            

        </FooterContainer>
    )
}

export default Footer;