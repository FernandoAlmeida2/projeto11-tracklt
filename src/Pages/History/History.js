import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import { useState, useEffect, useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { UserContext } from "../../Contexts";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import SearchingData from "../../Components/SearchingData/SearchingData";
import InfoMessage from "./InfoMessage";

const { darkBlue, text, white, green, red } = COLORS;

export default function History() {
  const [historyData, setHistData] = useState(null);
  const [value, onChange] = useState(new Date());
  const [dayMessage, setMessage] = useState(null);
  const userData = useContext(UserContext);
  const dayjs = require("dayjs");

  function getRegisterOrNull(date) {
    const register = historyData.filter((h) => {
      const dateArray = h.day.split("/");
      const engDate = dateArray[2] + "-" + dateArray[1] + "-" + dateArray[0];
      if (dayjs(engDate).isSame(dayjs(date))) {
        return true;
      }
      return false;
    });
    if (register.length === 1) return register[0];
    return null;
  }

  function tileClassName({ date }) {
    const historyDay = getRegisterOrNull(date);
    if (historyDay !== null) {
      if (historyDay.habits.filter((r) => r.done === false).length === 0) {
        return "day success";
      }
      return "day fail";
    } else {
      return "day";
    }
  }

  function displayInfo( date ) {
    const historyDay = getRegisterOrNull(date);
    if (historyDay !== null) {
      setMessage({day: historyDay.day, habits: [...historyDay.habits]});
    }
  }

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    axios
      .get(`${BASE_URL}habits/history/daily`, config)
      .then((res) => {
        setHistData(res.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }, [userData.token, setHistData]);

  if (historyData === null) {
    return <SearchingData />;
  }
  return (
    <HistStyle>
      <h1>Histórico</h1>
      {historyData.length === 0 ? (
        <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
      ) : (
        <CalendarStyle>
          <Calendar
            onChange={onChange}
            value={value}
            className="calendar"
            tileClassName={tileClassName}
            onClickDay={displayInfo}
          />
        </CalendarStyle>
      )}
      {dayMessage !== null && (
        <InfoMessage dayMessage={dayMessage} setMessage={setMessage} />
      )}
    </HistStyle>
  );
}

const HistStyle = styled.main`
  margin: 13.31vh 4.5vw;
  height: 73.38vh;
  overflow-y: auto;
  h1 {
    color: ${darkBlue};
    font-size: 6.13vw;
    margin-bottom: 6vw;
  }

  h2 {
    color: ${text};
    font-size: 4.8vw;
    line-height: 6vw;
  }
`;

const CalendarStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${white};
  border-radius: 2.67vw;

  .calendar {
    width: 83.3vw;
    height: 107.2vw;
    border: none;
  }

  .day {
    width: 9vw;
    height: 9vw;
    border-radius: 9vw;
    margin-bottom: 4vw;
  }

  .fail {
    background-color: ${red};
  }
  .success {
    background-color: ${green};
  }
`;
