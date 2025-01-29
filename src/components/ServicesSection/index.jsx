import styled from "styled-components";
import Title from "../Title";
import DescriptionParagraph from "../DescriptionParagraph";
import ServiceCard from "../ServiceCard";

const Services = styled.section`
    background-color: #ffc3c3;
    background-image: url('assets/backpawprint_light.png');
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px ;
`

const CardSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 30px;
    width: 100%;
    justify-content: center;
`
const DescriptionContainer = styled.div`
    width: 50%;
    text-align: center`
const ServicesSection = ()=>{
    return(
        <Services>
            <Title text="Services We Provided"/>
            <DescriptionContainer>
                <DescriptionParagraph text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque non impedit laborum ad debitis, sint quia expedita, adipisci, suscipit minima quod nisi odio est.'}/>
            </DescriptionContainer>
            <CardSection>
                <ServiceCard img='assets/p1.jpg' title='Cat care' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit.'/>
                <ServiceCard img='assets/p2.jpg' title='Dog Training' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit.'/>
                <ServiceCard img='assets/p5.jpg' title='Fish Foods' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit.'/>
                <ServiceCard img='assets/p6.jpg' title='Birds Spa' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit.'/>
            </CardSection>
        </Services>
    )
}

export default ServicesSection;