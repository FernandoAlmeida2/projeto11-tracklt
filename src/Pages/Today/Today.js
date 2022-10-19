import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../Contexts";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { MagnifyingGlass } from "react-loader-spinner";
import { weekdays } from "../../constants/weekdays";
import { COLORS } from "../../constants/colors";
import HabitItem from "../../Components/HabitItem/HabitItem";

const {darkBlue, green, textNoProgress} = COLORS;

const todaytest = [
  {
    id: 3,
    name: "Acordar",
    done: true,
    currentSequence: 1,
    highestSequence: 10,
  },
  {
    id: 5,
    name: "Dar uma cagada",
    done: false,
    currentSequence: 100,
    highestSequence: 200,
  },
];

export default function Today({ handleErrors, todayProgress, setProgress }) {
  const [todayHabits, setTodayData] = useState(null);
  const userData = useContext(UserContext);
  const dayjs = require("dayjs");
  const dayNumber = dayjs().locale("pt-br").day();
  const dayofMonth = dayjs().locale("pt-br").date();
  const month = dayjs().locale("pt-br").month();

  function progressMessage(total){
    if(todayProgress === 0){
      return "Nenhum hábito concluído ainda";
    }
    return `${Math.round(100 * todayHabits/total)}% dos hábitos concluídos`;
  }

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    axios
      .get(`${BASE_URL}habits/today`, config)
      .then((res) => {
        setTodayData(res.data);
      })
      .catch((err) => {
        handleErrors(err.response);
      });
  }, [handleErrors, userData.token]);

  if (todayHabits === null) {
    return (
      <TodayStyle>
        <Header />
        <SearchingStyle>
          <MagnifyingGlass
            height="100"
            width="100"
            glassColor="#c0efff"
            color="#126BA5"
          />
        </SearchingStyle>
        <Footer />
      </TodayStyle>
    );
  }
  return (
    <>
      <Header />
      <TodayStyle habitsNum={todayHabits.length}>
        <h1>
          {weekdays[dayNumber]}, {dayofMonth}/{month < 10 && "0"}{month}
        </h1>
        <p>{progressMessage(todayHabits.length)}</p>
        <HabitsList>{todaytest.map((habit) => <HabitItem key={habit.id} habit={habit} />)}</HabitsList>
      </TodayStyle>
      <Footer />
    </>
  );
}

const TodayStyle = styled.main`
  margin: 13.31vh 4.5vw;
  height: 73.38vh;
  overflow-y: auto;

  h1{
    font-size: 6.13vw;
    color: ${darkBlue}
  }

  p{
    font-size: 4.8vw;
    color: ${props => props.habitsNum !== 0 ? green : textNoProgress};
    line-height: 6.13vw;
  }
`;

const SearchingStyle = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  margin-top: 20vh;
`;

const HabitsList = styled.div`
  margin-top: 7vw;
`