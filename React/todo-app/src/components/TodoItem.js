import React from 'react';
import styled from 'styled-components';
import { BsCheckCircle, BsCircle } from 'react-icons/bs';

const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #888;
`;

const TodoText = styled.p`
  flex: 1;
  margin-left: 12px;
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
`;

const IconWrapper = styled.span`
  margin-right: 8px;
  color: #a95ae8; /* Neon purple color for icons */
`;

const TodoItem = ({ todo, toggleTodoStatus }) => {
  return (
    <TodoItemWrapper onClick={toggleTodoStatus}>
      {todo.completed ? (
        <IconWrapper>
          <BsCheckCircle size={20} />
        </IconWrapper>
      ) : (
        <IconWrapper>
          <BsCircle size={20} />
        </IconWrapper>
      )}
      <TodoText completed={todo.completed}>{todo.text}</TodoText>
    </TodoItemWrapper>
  );
};

export default TodoItem;
