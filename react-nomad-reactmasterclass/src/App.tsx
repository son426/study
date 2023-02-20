import React, { InputHTMLAttributes, useRef } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { boardsState, toDoState } from "./atoms";
import Board from "./components/Board";
import { useForm } from "react-hook-form";

const Wrapper = styled.div`
  display: flex;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Boards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  /* display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px; */
`;

interface IForm {
  board: string;
}

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);

  const onDragEnd = ({ destination, source, draggableId }: DropResult) => {
    if (!destination) return;
    // 같은 보드안에서 움직일때
    if (destination.droppableId === source.droppableId) {
      setToDos((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]];
        const taskObj = boardCopy[source.index];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, taskObj);
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
        };
      });
    } // 같은 보드안에서 움직일때
    else if (destination.droppableId !== source.droppableId) {
      setToDos((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]];
        const destinationBoard = [...allBoards[destination.droppableId]];
        const taskObj = sourceBoard[source.index];
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination?.index, 0, taskObj);
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        };
      });
    }
  };

  // new boards

  // const inputRef = useRef<HTMLInputElement>(null);

  const [boards, setBoards] = useRecoilState(boardsState);
  // const boards = Object.keys(toDos);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const onValid = (data: IForm) => {
    const copyBoard = [...boards, data.board];

    console.log("boards : ", boards);
    setBoards(copyBoard);
    localStorage.setItem("boards", JSON.stringify(copyBoard));

    setToDos((allBoards: any) => {
      const copyBoard = {
        ...allBoards,
        [data.board]: [],
      };
      return copyBoard;
    });

    console.log("boards : ", boards);
    console.log("todos : ", toDos);

    setValue("board", "");
    // inputRef.current?.focus();
  };

  localStorage.setItem("toDo", JSON.stringify(toDos));

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("board", { required: "board 제목 쓰세요." })}
          placeholder="board 제목"
          // ref={inputRef}
        />
        <button>보드 만들기</button>
      </form>

      <Boards>
        <DragDropContext onDragEnd={onDragEnd}>
          {boards?.map((board: string, index: number) => (
            <Board boardName={board} toDos={toDos[board]} key={index} />
          ))}
        </DragDropContext>
      </Boards>

      {/* <Boards>
        <DragDropContext onDragEnd={onDragEnd}>
          {Object.keys(toDos)?.map((boardId, index) => (
            <Board boardId={boardId} toDos={toDos[boardId]} key={index} />
          ))}
        </DragDropContext>
      </Boards> */}
    </Wrapper>
  );
}

export default App;
