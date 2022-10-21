import styled from "styled-components";
import { InputStyle } from "../../styles/CommonStyles";
import { useState, useContext } from "react";
import { UserContext } from "../../Contexts";
import { BASE_URL } from "../../constants/urls";
import { COLORS } from "../../constants/colors";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import DayBoxes from "../../Components/DayBoxes";
import handleErrors from "../../handleErrors";

const { white, lightBlue } = COLORS;

export default function CreateForm({
  setAddClicked,
  refreshHabits,
  isAddClicked,
}) {
  const [isLoading, setLoading] = useState(false);
  const [daysSelected, setDay] = useState([]);
  const userData = useContext(UserContext);
  const [valueInput, setValue] = useState("");

  function selectDay(index) {
    if (daysSelected.includes(index)) {
      setDay(daysSelected.filter((dayIndex) => dayIndex !== index));
    } else {
      setDay([...daysSelected, index]);
    }
  }

  function handleForm() {
    if (!isLoading) {
      const config = {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      };
      const body = {
        name: valueInput,
        days: [...daysSelected],
      };
      setLoading(true);
      axios
        .post(`${BASE_URL}habits`, body, config)
        .then(() => {
          setDay([]);
          setValue("");
          setLoading(false);
          setAddClicked(false);
          refreshHabits();
        })
        .catch((err) => {
          setLoading(false);
          handleErrors(err.response);
        });
    }
  }

  return (
    <CreateStyle isAddClicked={isAddClicked}>
      <InputStyle
        placeholder="nome do hábito"
        isLoading={isLoading}
        value={valueInput}
        onChange={(e) => setValue(e.target.value)}
        disabled={isLoading}
        required
      />
      <DayBoxes
        daysSelected={daysSelected}
        selectDay={selectDay}
        isClickable={isLoading ? "nop" : "yep"}
      />
      <ButtonsDiv>
        <div onClick={() => setAddClicked(false)}>Cancelar</div>
        <SaveButton onClick={handleForm}>
          {isLoading ? (
            <ThreeDots height="50" width="50" radius="9" color="#ffffff" />
          ) : (
            "Salvar"
          )}
        </SaveButton>
      </ButtonsDiv>
    </CreateStyle>
  );
}

const CreateStyle = styled.div`
  width: 90.7vw;
  height: 48vw;
  background-color: ${white};
  display: ${(props) => (props.isAddClicked ? "flex" : "none")};
  flex-direction: column;
  border-radius: 1.33vw;
  gap: 2vw;
  padding: 4vw;
  margin-bottom: 8vw;
`;

const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 6vw;
  font-size: 4.27vw;
  margin-top: 6vw;
  color: ${lightBlue};
  cursor: pointer;
`;

const SaveButton = styled.div`
  width: 22.4vw;
  height: 9.3vw;
  border-radius: 1.24vw;
  background-color: ${lightBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${white};
`;
