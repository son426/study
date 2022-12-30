import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

const Card = styled.div<{ isDragging: boolean }>`
  background-color: ${(props) =>
    props.isDragging ? "#74b9ff" : props.theme.cardColor};
  padding: 10px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export interface IDragProps {
  toDo: string;
  index: number;
  boardId: string;
}

function DraggableCard({ toDo, index, boardId }: IDragProps) {
  const setToDos = useSetRecoilState(toDoState);

  const onClickCardDelete = () => {
    setToDos((oldBoards: any) => {
      const copyToDos = [...oldBoards[boardId]];
      copyToDos.splice(index, 1);
      return {
        ...oldBoards,
        [boardId]: copyToDos,
      };
    });
  };
  return (
    <Draggable draggableId={toDo} index={index}>
      {/* key랑 draggbleId랑 무조건 같아야함. beautiful dnd의 사용법 */}
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDo}
          <button onClick={onClickCardDelete}>삭제</button>
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
