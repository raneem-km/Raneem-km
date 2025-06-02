import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ todos = [], setTodos }) => {
  const [newTodo, setNewTodo] = useState('');
  const navigate = useNavigate();

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;

    const newId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todoItem = {
      id: newId,
      todo: newTodo,
      completed: false,
      userId: 1,
    };
    setTodos([todoItem, ...todos]);
    setNewTodo('');
  };

  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString(undefined, options);

  const completedTodos = todos.filter(todo => todo.completed);
  const incompleteTodos = todos.filter(todo => !todo.completed);

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.appTitle}>My To-Do List</h1>
        <p style={styles.date}>{formattedDate}</p>
      </header>

    
      {/* Todo Lists */}
      <div style={styles.taskListContainer}>
        {todos.length === 0 ? (
          <p style={styles.emptyState}>You're all caught up! Time to relax or add new tasks.</p>
        ) : (
          <>
            {incompleteTodos.length > 0 && (
              <>
                <h2 style={styles.sectionTitle}>Things To Do</h2>
                {incompleteTodos.map(todo => (
                  <div key={todo.id} style={styles.todoItem}>
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => handleToggleComplete(todo.id)}
                      style={styles.checkbox}
                    />
                    <span style={styles.todoText}>{todo.todo}</span>
                    <button onClick={() => handleDeleteTodo(todo.id)} style={styles.deleteButton}>
                      &#x2715;
                    </button>
                  </div>
                ))}
              </>
            )}

            {completedTodos.length > 0 && (
              <>
                <h2 style={styles.sectionTitle}>Completed Tasks ({completedTodos.length})</h2>
                {completedTodos.map(todo => (
                  <div key={todo.id} style={{ ...styles.todoItem, ...styles.completedTodoItem }}>
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => handleToggleComplete(todo.id)}
                      style={styles.checkbox}
                    />
                    <span style={{ ...styles.todoText, textDecoration: 'line-through', color: '#999' }}>
                      {todo.todo}
                    </span>
                    <button onClick={() => handleDeleteTodo(todo.id)} style={styles.deleteButton}>
                      &#x2715;
                    </button>
                  </div>
                ))}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    maxWidth: '600px',
    margin: '40px auto',
    padding: '25px',
    backgroundColor: '#121212',  // Dark background
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.8)',
    color: '#e0e0e0',  // Light text color
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
    paddingBottom: '15px',
    borderBottom: '1px solid #333',
  },
  appTitle: {
    fontSize: '2.5em',
    color: '#bb86fc',  // Soft purple accent
    marginBottom: '8px',
  },
  date: {
    fontSize: '1em',
    color: '#bbb',
  },
  addTodoSection: {
    display: 'flex',
    marginBottom: '30px',
    gap: '10px',
  },
  addTodoInput: {
    flexGrow: 1,
    padding: '12px 15px',
    border: '1px solid #444',
    borderRadius: '8px',
    fontSize: '1em',
    outline: 'none',
    backgroundColor: '#1e1e1e',
    color: '#e0e0e0',
    transition: 'border-color 0.3s ease',
  },
  addButton: {
    padding: '12px 25px',
    backgroundColor: '#bb86fc',
    color: '#121212',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1em',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
  taskListContainer: {
    marginTop: '20px',
  },
  sectionTitle: {
    fontSize: '1.4em',
    color: '#ddd',
    marginBottom: '15px',
    borderBottom: '1px solid #333',
    paddingBottom: '8px',
    marginTop: '25px',
  },
  todoItem: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    padding: '15px 20px',
    borderRadius: '8px',
    marginBottom: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    borderLeft: '5px solid #bb86fc',
  },
  completedTodoItem: {
    opacity: 0.7,
    borderLeft: '5px solid #6200ee',
  },
  checkbox: {
    marginRight: '15px',
    width: '20px',
    height: '20px',
    cursor: 'pointer',
    accentColor: '#bb86fc',
  },
  todoText: {
    flexGrow: 1,
    fontSize: '1.1em',
    wordBreak: 'break-word',
    color: '#e0e0e0',
  },
  deleteButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#cf6679',
    fontSize: '1.2em',
    cursor: 'pointer',
    marginLeft: '15px',
    padding: '5px',
    borderRadius: '50%',
    transition: 'background-color 0.2s ease, color 0.2s ease',
  },
  emptyState: {
    textAlign: 'center',
    color: '#888',
    fontSize: '1.2em',
    marginTop: '50px',
    padding: '20px',
    backgroundColor: '#222',
    borderRadius: '8px',
  },
};

export default HomePage;
