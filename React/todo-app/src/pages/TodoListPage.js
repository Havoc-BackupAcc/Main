import React from 'react';
import styled from 'styled-components';
import TodoItem from '../components/TodoItem';
import { BsTrash } from 'react-icons/bs';

const TodoListWrapper = styled.div`
  /* Styles for the list container */
  display: flex;
  flex-direction: space-between;
  justify-content: center;
  align-items: center;
`;

const DeleteIcon = styled.span`
  color: #a95ae8; /* Neon purple color for delete icon */
  cursor: pointer;
  padding-left: 10px;
`;

const TodoListPage = ({ todo, toggleTodoStatus, deleteTodo }) => {
  return (
    <TodoListWrapper>
      <TodoItem todo={todo} toggleTodoStatus={toggleTodoStatus} />
      <DeleteIcon onClick={deleteTodo}>
        <BsTrash size={20} />
      </DeleteIcon>
    </TodoListWrapper>
  );
};

export default TodoListPage;
