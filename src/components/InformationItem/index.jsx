import styled from "styled-components";
import DescriptionParagraph from "../DescriptionParagraph";

const ListItem = styled.li`
    display: flex;
    align-items: center;
    gap: 10px;
`
const CheckIcon = styled.img`
    width: 24px;
`
const InformationItem  = ({info})=>{
    return(
        <ListItem>
            <CheckIcon src='assets/check.svg'/>
            <DescriptionParagraph text={info}/>
        </ListItem>
    )
}

export default InformationItem;