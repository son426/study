import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import DraggableCard from "./DraggbleCard";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState, useRecoilState } from "recoil";
import { toDoState, ITodo } from "../atoms";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px 5px;
  min-height: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: 600;
  padding-top: 20px;
  margin-bottom: 10px;
  position: relative;
`;

const Area = styled.div<{ isDraggingOver: boolean }>`
  padding: 15px 10px;
  flex-grow: 1;
  background-color: ${(props) =>
    props.isDraggingOver ? "#3a96fecc" : "transparent"};
  transition: background-color 0.1s ease-in-out;
`;

interface IBoardProps {
  toDos?: ITodo[];
  boardName: string;
}

interface IForm {
  toDo: string;
}

function Board({ toDos, boardName }: IBoardProps) {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setToDos = useSetRecoilState(toDoState);
  const handleValid = (data: IForm) => {
    const newToDo = {
      id: Date.now(),
      text: data.toDo,
    };
    const toDosCopy = [...(toDos as any), newToDo];
    console.log(toDosCopy);
    setToDos((allBoards) => {
      return {
        ...allBoards,
        [boardName]: toDosCopy,
      };
    });
    setValue("toDo", "");
  };

  const onClickBoardDelete = () => {
    setToDos((oldToDos) => {
      const copyToDos = { ...oldToDos };
      delete copyToDos[boardName];
      return copyToDos;
    });
  };

  return (
    <Wrapper>
      <Title>
        {boardName}
        <button
          style={{
            backgroundColor: "rgba(0,0,0,0.2)",
            width: "25px",
            height: "25px",
            position: "absolute",
            top: "10px",
            right: "5px",
            border: "none",
            borderRadius: "10px",
            fontWeight: "600",
            color: "white",
          }}
          onClick={onClickBoardDelete}
        >
          X
        </button>
      </Title>

      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", { required: "Add Task" })}
          placeholder={`Add Task on ${boardName}`}
        />
      </form>
      <Droppable droppableId={boardName}>
        {(magic, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {toDos?.map((toDo, index) => (
              <DraggableCard
                key={toDo.id}
                toDoId={toDo.id}
                toDoText={toDo.text}
                index={index}
                boardName={boardName}
              />
            ))}
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
