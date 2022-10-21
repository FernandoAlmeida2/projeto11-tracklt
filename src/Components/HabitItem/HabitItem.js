import { HabitStyle } from "../../styles/CommonStyles";
import DayBoxes from "../DayBoxes";
import trash from "../../images/trash.png";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { UserContext } from "../../Contexts";
import { useContext } from "react";

export default function HabitItem({ habit, refreshHabits}) {
  const userData = useContext(UserContext);

  function deleteHabit(){
    if (window.confirm("Deseja realmente apagar este hábito?")) {
      const config = {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      };
      axios.delete(`${BASE_URL}habits/${habit.id}`, config).then(() => {
        refreshHabits();
      })
      .catch((err) => {
        alert(err.response.statusText);
      });
    }
    
  }

  return (
    <HabitStyle>
      <ContentStyle>
        <p data-identifier="habit-name">{habit.name}</p>
        <DayBoxes
          daysSelected={habit.days}
          selectDay=""
          isClickable="nop"
        />
      </ContentStyle>
      <TrashIcon src={trash} alt="delete item" onClick={deleteHabit} data-identifier="delete-habit-btn" />
    </HabitStyle>
  );
}

const ContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vw;
  p {
    font-size: 5.3vw;
    line-height: 6.67vw;
  }
`;

const TrashIcon = styled.img`
    position: absolute;
    top: 3vw;
    right: 3vw;
    cursor: pointer;
`
