import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import DraggableCard from "./DraggbleCard";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState, useRecoilState } from "recoil";
import { toDoState, boardsState } from "../atoms";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.boardColor};
  padding-top: 20px;
  border-radius: 5px 5px;
  min-height: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Area = styled.div<{ isDraggingOver: boolean }>`
  padding: 15px 10px;
  flex-grow: 1;
  background-color: ${(props) =>
    props.isDraggingOver ? "#b2bec3" : props.theme.boardColor};
  transition: background-color 0.1s ease-in-out;
`;

interface IBoardProps {
  toDos?: string[];
  boardId: string;
}

interface IForm {
  toDo: string;
}

function Board({ toDos, boardId }: IBoardProps) {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setToDos = useSetRecoilState(toDoState);
  const handleValid = (data: IForm) => {
    const toDosCopy = [...(toDos as any), data.toDo];
    setToDos((allBoards) => {
      return {
        ...allBoards,
        [boardId]: toDosCopy,
      };
    });
    setValue("toDo", "");
  };

  const onClickBoardDelete = () => {
    setToDos((oldToDos) => {
      const copyToDos = { ...oldToDos };
      delete copyToDos[boardId];
      return copyToDos;
    });
  };

  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", { required: "please write a toDo" })}
          placeholder="Write a toDo"
        />
        <button>추가</button>
      </form>
      <Droppable droppableId={boardId}>
        {(magic, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {toDos?.map((toDo, index) => (
              <DraggableCard
                key={toDo}
                toDo={toDo}
                index={index}
                boardId={boardId}
              />
            ))}
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
      <button onClick={onClickBoardDelete}>삭제버튼</button>
    </Wrapper>
  );
}

export default Board;
