import { useContext } from "react";
import { UserContext } from "../../Contexts";
import styled from "styled-components";
import { logoFont } from "../../constants/fonts";
import { COLORS } from "../../constants/colors";

const {darkBlue, white} = COLORS;

export default function Header(){
    const userData = useContext(UserContext);
    return(
        <HeaderStyle>
            <h1>Tracklt</h1>
            <img src={userData.image} alt="user-avatar" data-identifier="avatar" />
        </HeaderStyle>
    )
}


const HeaderStyle = styled.div`
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100vw;
    height: 9.31vh;
    background-color: ${darkBlue};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5vw;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    h1{
        font-family: ${logoFont};
        color: ${white};
        font-size: 10.4vw;  
    }

    img{
        width: 13.6vw;
        height: 13.6vw;
        border-radius: 13.6vw;

    }
`
