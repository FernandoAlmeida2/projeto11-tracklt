import { DaysContainer, DayDiv } from "../styles/CommonStyles";

const daysOfWeek = ["D", "S", "T", "Q", "Q", "S", "S"];

export default function DayBoxes({ daysSelected, selectDay, isClickable }) {
  return (
    <DaysContainer>
      {daysOfWeek.map((day, i) => (
        <DayDiv
          key={i}
          isSelected={daysSelected.includes(i)}
          isClickable={isClickable}
          onClick={() => isClickable === "yep" && selectDay(i)}
        >
          {day}
        </DayDiv>
      ))}
    </DaysContainer>
  );
}
