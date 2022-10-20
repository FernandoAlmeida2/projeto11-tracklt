import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import { weekdays } from "../../constants/weekdays";

export default function InfoMessage({ dayMessage, setMessage }) {
  return (
    <MessageContainer>
      <MessageStyle>
        <div>
          <h3>
            {dayMessage.day} - {weekdays[dayMessage.habits[0].weekDay]}
          </h3>
          {dayMessage.habits.map((d) => (
            <MessageItem key={d.historyId} done={d.done}>
              <p>
                Hábito: <span>{d.name}</span>
              </p>
              Concluído: <span>{d.done ? "Sim" : "Não"}</span>
            </MessageItem>
          ))}
        </div>
        <ion-icon
          name="close-circle-outline"
          onClick={() => setMessage(null)}
        ></ion-icon>
      </MessageStyle>
    </MessageContainer>
  );
}

const MessageContainer = styled.main`
  top: 0;
  left: 0;
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(199, 200, 214, 0.5);
`;

const MessageStyle = styled.div`
  padding: 6vw 3vw;
  position: relative;
  width: 60vw;
  height: 60vw;
  overflow-y: auto;
  border-radius: 9vw;
  background-color: ${COLORS.white};
  color: ${COLORS.text};
  z-index: 1;
  h3 {
    color: ${COLORS.darkBlue};
    font-size: 4.8vw;
    margin-bottom: 2vw;
    line-height: 5vw;
  }

  ion-icon {
    width: 6vw;
    height: 6vw;
    position: absolute;
    top: 2vw;
    right: 2vw;
    cursor: pointer;
  }
`;

const MessageItem = styled.div`
  margin-bottom: 2vw;
  font-size: 3.2vw;
  line-height: 4vw;
  p {
    color: ${COLORS.orange};
    span {
      color: ${COLORS.text};
    }
  }
  span{
    color: ${props => props.done ? COLORS.green : COLORS.red}
  }
`;
