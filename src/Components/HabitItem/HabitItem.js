import styled from "styled-components";
import { COLORS, checkNone } from "../../constants/colors";
import checkmark from "../../images/checkmark.png";

const { text, white, green } = COLORS;

export default function HabitItem({ habit }) {
  return (
    <HabitStyle>
      <TextStyle>
        <h2>{habit.name}</h2>
        <h3>
          Sequência atual:{" "}
          <CurrentColor done={habit.done}>
            {habit.currentSequence} dias
          </CurrentColor>
          <br />
          Seu recorde:{" "}
          <HighestColor isHighest={habit.highestSequence === habit.currentSequence}>
            {habit.highestSequence} dias
          </HighestColor>
        </h3>
      </TextStyle>
      <CheckStyle done={habit.done}>
        <img src={checkmark} alt="checkmark" />
      </CheckStyle>
    </HabitStyle>
  );
}

const HabitStyle = styled.div`
  width: 90.7vw;
  height: 25.1vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${text};
  padding: 4.53vw 3.47vw;
  background-color: ${white};
  margin-bottom: 2.67vw;
  border-radius: 1.33vw;
`;

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
  height: 18.4vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.33vw;
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
