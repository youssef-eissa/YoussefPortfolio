import styled from "styled-components";


export const StyledHeader = styled.h1`
    color: #ccd6f6;
    font-family: 'Hind', sans-serif;
    width:fit-content;
    position: relative;
    font-size:32px;

    span{
    color: #64FFDA;
    font-family: 'Roboto Mono', monospace;
    margin-right: 10px;
    }


    :after{
    position: absolute;
    content: '';
    right: -350px;
    width:300px;
    height: 2px;
    top:50%;
    transform: translateY(-50%);
    background-color: #233554;
    }
    @media (max-width: 768px) {
    font-size:23px;

    :after{
    display: none;


    }
    }
    
}

`