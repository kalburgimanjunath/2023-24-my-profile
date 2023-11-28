import React, { useState, useEffect } from "react";
import CodeSnippet from "./codesnippet";
import { CopyBlock, CodeBlock, dracula } from "react-code-blocks";
const statement =
  "Create a React component that allows users to reorder a list of items using drag-and-drop.";
// output
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const ReorderList = ({ items }) => {
  const [list, setList] = useState(items);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const updatedList = [...list];
    const [movedItem] = updatedList.splice(result.source.index, 1);
    updatedList.splice(result.destination.index, 0, movedItem);

    setList(updatedList);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {list.map((item, index) => (
              <Draggable
                key={item.id}
                draggableId={item.id.toString()}
                index={index}
              >
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {item.content}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const samplecode = `
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const ReorderList = ({ items }) => {
  const [list, setList] = useState(items);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const updatedList = [...list];
    const [movedItem] = updatedList.splice(result.source.index, 1);
    updatedList.splice(result.destination.index, 0, movedItem);

    setList(updatedList);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {list.map((item, index) => (
              <Draggable
                key={item.id}
                draggableId={item.id.toString()}
                index={index}
              >
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {item.content}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};`;

export default function Problem4() {
  const newlist = [
    { id: 1, content: "hello " },
    { id: 2, content: "world " },
    { id: 3, content: "manju " },
  ];
  return (
    <CodeSnippet
      statement={statement}
      codeSnippet={samplecode}
      output={<ReorderList items={newlist} />}
    />
  );
}
