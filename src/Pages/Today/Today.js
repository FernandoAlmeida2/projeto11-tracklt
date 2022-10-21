import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { UserContext, ProgressContext } from "../../Contexts";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { weekdays } from "../../constants/weekdays";
import { COLORS } from "../../constants/colors";
import TodayItem from "../../Components/TodayItem/TodayItem";
import SearchingData from "../../Components/SearchingData/SearchingData";

const { darkBlue, green, textNoProgress } = COLORS;

export default function Today({ setProgress }) {
  const [todayHabits, setTodayData] = useState(null);
  const [refreshControl, setRefresh] = useState(0);
  const userData = useContext(UserContext);
  const todayProgress = useContext(ProgressContext);
  const dayjs = require("dayjs");
  const dayNumber = dayjs().locale("pt-br").day();
  const dayofMonth = dayjs().locale("pt-br").date();
  const month = dayjs().locale("pt-br").month();

  function refreshHabits() {
    setRefresh(refreshControl + 1);
  }

  function progressMessage() {
    if (todayProgress === 0) {
      return "Nenhum hábito concluído ainda";
    }
    return `${todayProgress}% dos hábitos concluídos`;
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
        const DoneNumber = res.data.filter((h) => h.done === true).length;
        if (res.data.length === 0) {
          setProgress(0);
        } else {
          setProgress(Math.round((100 * DoneNumber) / res.data.length));
        }
        setTodayData(res.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }, [userData.token, refreshControl, setProgress, todayHabits]);
  if (todayHabits === null) {
    return <SearchingData />;
  }
  return (
    <TodayStyle habitsNum={todayProgress}>
      <h1 data-identifier="today-infos">
        {weekdays[dayNumber]}, {dayofMonth}/{month < 10 && "0"}
        {month}
      </h1>
      <p data-identifier="today-infos">{progressMessage()}</p>
      <HabitsList>
        {todayHabits.map((habit) => (
          <TodayItem
            key={habit.id}
            habit={habit}
            refreshHabits={refreshHabits}
          />
        ))}
      </HabitsList>
    </TodayStyle>
  );
}

const TodayStyle = styled.main`
  margin: 13.31vh 4.5vw;
  height: 73.38vh;
  overflow-y: auto;

  h1 {
    font-size: 6.13vw;
    color: ${darkBlue};
  }

  p {
    font-size: 4.8vw;
    color: ${(props) => (props.habitsNum !== 0 ? green : textNoProgress)};
    line-height: 6.13vw;
  }
`;

const HabitsList = styled.div`
  margin-top: 7vw;
`;
