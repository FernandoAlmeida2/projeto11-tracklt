import styled from "styled-components";
import { COLORS, checkNone } from "../../constants/colors";
import checkmark from "../../images/checkmark.png";
import { HabitStyle } from "../../styles/CommonStyles";
import { UserContext } from "../../Contexts";
import { useContext } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

const { text, green } = COLORS;

export default function TodayItem({ habit, refreshHabits }) {
  const { highestSequence, currentSequence, done, name, id } = habit;
  const userData = useContext(UserContext);
  function handleCheckClick() {
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    if (done) {
      axios
        .post(`${BASE_URL}habits/${id}/uncheck`, [], config)
        .then(() => {
          refreshHabits();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    } else {
      axios
        .post(`${BASE_URL}habits/${id}/check`, [], config)
        .then(() => {
          refreshHabits();
        })
        .catch((err) => {
          console.log(config)
          alert(err.response.data.message);
        });
    }
  }
  return (
    <HabitStyle>
      <TextStyle>
        <h2>{name}</h2>
        <h3>
          Sequência atual:{" "}
          <CurrentColor done={done}>{currentSequence} dias</CurrentColor>
          <br />
          Seu recorde:{" "}
          <HighestColor
            isHighest={
              highestSequence === currentSequence && currentSequence !== 0
            }
          >
            {highestSequence} dias
          </HighestColor>
        </h3>
      </TextStyle>
      <CheckStyle done={done}>
        <img src={checkmark} alt="checkmark" onClick={handleCheckClick} />
      </CheckStyle>
    </HabitStyle>
  );
}

const TextStyle = styled.div`
  h2 {
    font-size: 5.3vw;
    margin-bottom: 2vw;
    line-height: 6.67vw;
  }

  h3 {
    font-size: 3.47vw;
    line-height: 4.27vw;
  }
`;

const CheckStyle = styled.div`
  background-color: ${(props) => (props.done ? green : checkNone.background)};
  border: 1px solid ${(props) => (props.done ? green : checkNone.border)};
  width: 18.4vw;
  min-width: 18.4vw;
  height: 18.4vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.33vw;
  cursor: pointer;
  img {
    width: 9.33vw;
    max-height: 7.47vw;
  }
`;

const CurrentColor = styled.span`
  color: ${(props) => (props.done ? green : text)};
`;

const HighestColor = styled.span`
  color: ${(props) => (props.isHighest ? green : text)};
`;
