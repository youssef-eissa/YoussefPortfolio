import styled from "styled-components";
import { Link } from "react-router-dom";

const TheLink = styled(Link)`
color:#64FFDA;
text-decoration:none;
background-color:#0A192F;
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
transition: 0.3s;
font-family: 'Bebas Neue', sans-serif;
border:1px solid #64FFDA;
padding: ${props => props.padding};
border-radius: 5px;



`

const StyledLink = styled.div`
background-color:#64FFDA;
width:100%;
border-radius: 5px;

:hover{
    ${TheLink}{
        transform: translate(-3px,-3px);
    }
}

`
export const StyledLinkDiv = ({link,to,padding,target}) => {
    return (
        <StyledLink>
            <TheLink target={target} padding={padding} to={ to}>{ link}</TheLink>
        </StyledLink>
    ) 
}

