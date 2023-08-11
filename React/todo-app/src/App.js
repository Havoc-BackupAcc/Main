import React, { useState } from 'react';
import styled from 'styled-components';
import { BsCheckCircle, BsCircle, BsPlus, BsTrash } from 'react-icons/bs';
import TodoListPage from './pages/TodoListPage';

const AppWrapper = styled.div`
  background-color: black;
  color: #fff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  background-color: #240e36; /* Lighter shade of the title's color */
`;

const Title = styled.h1`
  color: black; /* Black title color */
`;

const AddTodoInput = styled.input`
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 5px;
  margin-bottom: 12px;
`;

const IconWrapper = styled.span`
  margin-right: 8px;
  color: #a95ae8; /* Neon purple color for icons */
  cursor: pointer;
`;

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (text.trim() !== '') {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), text, completed: false },
      ]);
    }
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodoStatus = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <AppWrapper>
      <CardContainer>
        <Title>Todo List</Title>
        <AddTodoInput
          type="text"
          placeholder="Add your todo..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addTodo(e.target.value);
              e.target.value = '';
            }
          }}
        />
        {todos.map((todo) => (
          <TodoListPage
            key={todo.id}
            todo={todo}
            toggleTodoStatus={() => toggleTodoStatus(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
          />
        ))}
      </CardContainer>
    </AppWrapper>
  );
};

export default App;
