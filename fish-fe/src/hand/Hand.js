import React, { useState } from 'react';
import './Hand.scss';

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Card from '@heruka_urgyen/react-playing-cards/lib/TcB';

function Hand() {
  const [cards, setCards] = useState([
    '2c',
    '3h',
    '5h',
    '6h',
    '4s',
    '8h',
    '9h',
    'Th',
    'Kh',
    '6d',
  ]);

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    overflow: 'auto',
  });

  const getItemStyle = (draggableStyle) => ({
    userSelect: 'none',
    margin: `0 4px 0 0`,

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(cards, result.source.index, result.destination.index);

    setCards(items);
  };

  return (
    <div className="Hand">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              {...provided.droppableProps}
            >
              {cards.map((card, index) => (
                <Draggable key={card} draggableId={card} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(provided.draggableProps.style)}
                    >
                      <Card card={card} height="90px" />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Hand;
