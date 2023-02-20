import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { ITodoState, toDoState } from "../atoms";

const Card = styled.div<{ isDragging: boolean }>`
  background-color: ${(props) =>
    props.isDragging ? "#74b9ff" : props.theme.cardColor};
  padding: 10px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  position: relative;
`;

export interface IDragProps {
  toDoId: number;
  toDoText: string;
  index: number;
  boardName: string;
}

function DraggableCard({ toDoId, toDoText, index, boardName }: IDragProps) {
  const setToDos = useSetRecoilState(toDoState);

  const onClickCardDelete = () => {
    setToDos((oldBoards: ITodoState) => {
      const copyToDos = [...oldBoards[boardName]];
      copyToDos.splice(index, 1);
      return {
        ...oldBoards,
        [boardName]: copyToDos,
      };
    });
  };
  return (
    <Draggable draggableId={toDoId + ""} index={index}>
      {/* key랑 draggbleId랑 무조건 같아야함. beautiful dnd의 사용법 */}
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDoText}
          <button
            style={{
              backgroundColor: "transparent",
              width: "20px",
              height: "20px",
              position: "absolute",
              top: "8px",
              right: "5px",
              borderRadius: "5px",
              fontWeight: "600",
              textAlign: "center",
            }}
            onClick={onClickCardDelete}
          >
            X
          </button>
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
