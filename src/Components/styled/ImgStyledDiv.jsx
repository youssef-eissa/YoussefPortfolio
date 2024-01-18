import styled from "styled-components";


export const ImgStyledDiv = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    position: relative;
    border-radius: 5px;
    overflow: hidden;
  
    
    :after{
        content:"";
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background-color:#64FFDA;
        opacity:0.4;
        z-index:1;
    }
    :hover:after{
        animation:colorChange 0.5s;
        background-color:transparent;
    }

    @keyframes colorChange{
            0%{
                background-color:white;
            }
            100%{
            background-color:transparent;

            }
        }
@media (max-width: 768px) {
    width: ${props => props.widthSm};
    height: ${props => props.heightSm};
    :after{
        background-color:transparent;
    }
}

`