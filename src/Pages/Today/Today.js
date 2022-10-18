import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import styled from "styled-components";

export default function Today(){
    return(
        <TodayStyle>
            <Header />
            <Footer />
        </TodayStyle>
    )
}

const TodayStyle = styled.main`
margin: 9.31vh 0;
height: 100vh;
overflow-y: auto;
background-color: #F2F2F2;
`