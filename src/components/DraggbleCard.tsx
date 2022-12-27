import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  padding: 10px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export interface IDragProps {
  toDo: string;
  index: number;
}

function DraggableCard({ toDo, index }: IDragProps) {
  console.log(toDo, "render");
  return (
    <Draggable draggableId={toDo} index={index}>
      {/* key랑 draggbleId랑 무조건 같아야함. beautiful dnd의 사용법 */}
      {(magic) => (
        <Card
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
