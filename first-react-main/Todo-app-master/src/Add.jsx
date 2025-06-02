import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddItem = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');
  const navigate = useNavigate();

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;
    addTodo(newTodo);
    navigate('/');
  };
const styles = {
  container: {
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    maxWidth: '600px',
    margin: '40px auto',
    padding: '25px',
    backgroundColor: '#121212', // dark background
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.7)', // stronger shadow for dark bg
    color: '#e0e0e0', // light text
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
    paddingBottom: '15px',
    borderBottom: '1px solid #333', // subtle dark border
  },
  appTitle: {
    fontSize: '2em',
    color: '#8ab4f8', // soft blue for title
    marginBottom: '8px',
  },
  addTodoSection: {
    display: 'flex',
    marginBottom: '30px',
    gap: '10px',
  },
  addTodoInput: {
    flexGrow: 1,
    padding: '12px 15px',
    border: '1px solid #444', // darker border
    borderRadius: '8px',
    fontSize: '1em',
    outline: 'none',
    backgroundColor: '#1e1e1e', // input background
    color: '#e0e0e0',
    transition: 'border-color 0.3s ease',
  },
  addButton: {
    padding: '12px 25px',
    backgroundColor: '#8ab4f8', // bright button color
    color: '#121212', // dark text on button
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1em',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
};



  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.appTitle}>Add New Task 📝</h1>
      </header>
      
      <div style={styles.addTodoSection}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
          style={styles.addTodoInput}
        />
        <button onClick={handleAddTodo} style={styles.addButton}>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddItem;
