import styled from "styled-components";
import plusIcon from "../../images/plus.png";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../Contexts";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import SearchingData from "../../Components/SearchingData/SearchingData";
import { COLORS } from "../../constants/colors";
import CreateForm from "./CreateForm";
import HabitItem from "../../Components/HabitItem/HabitItem";

const { lightBlue, darkBlue, text } = COLORS;

export default function Habits({ handleErrors }) {
  const userData = useContext(UserContext);
  const [habitsList, setHabitsList] = useState(null);
  const [isAddClicked, setAddClicked] = useState(false);
  const [refreshControl, setRefresh] = useState(0);

  function refreshHabits() {
    setRefresh(refreshControl + 1);
  }

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    axios
      .get(`${BASE_URL}habits`, config)
      .then((res) => {
        setHabitsList(res.data);
      })
      .catch((err) => {
        handleErrors(err.response);
      });
  }, [handleErrors, userData.token, refreshControl]);

  if (habitsList === null) {
    return <SearchingData />;
  }

  return (
    <HabitsStyle>
      <AddHabitsStyle>
        <h1>Meus hábitos</h1>
        <AddHabitsIcon onClick={() => !isAddClicked && setAddClicked(true)}>
          <img src={plusIcon} alt="add" />
        </AddHabitsIcon>
      </AddHabitsStyle>
      <CreateForm
        setAddClicked={setAddClicked}
        refreshHabits={refreshHabits}
        isAddClicked={isAddClicked}
      />
      {habitsList.length === 0 ? (
        <h2>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </h2>
      ) : (
        habitsList.map((habit) => (
          <HabitItem
            key={habit.id}
            habit={habit}
            refreshHabits={refreshHabits}
          />
        ))
      )}
    </HabitsStyle>
  );
}

const HabitsStyle = styled.main`
  margin: 13.31vh 4.5vw;
  height: 73.38vh;
  overflow-y: auto;
  h1 {
    color: ${darkBlue};
    font-size: 6.13vw;
  }
  h2 {
    color: ${text};
    font-size: 4.8vw;
    line-height: 6vw;
  }
`;

const AddHabitsStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 7.5vw;
`;
const AddHabitsIcon = styled.div`
  width: 10.7vw;
  height: 9.3vw;
  background-color: ${lightBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.24vw;
  cursor: pointer;
  img {
    width: 4.3vw;
    height: 4.3vw;
  }
`;
