import React, { useState } from 'react'
import styles from "./header.module.css";
import rocket from "../../assets/rocket.png";
import todo from "../../assets/todo.png";
import { AiOutlinePlusCircle } from "react-icons/ai"
import { useEffect } from 'react';

const Header = ({addTask, isEdited:{state,editId}, tasks, setTasks, setIsEdited, input, title, setTitle}) => {

  function handleSubmit(e) {
    e.preventDefault();
    if(title && !state) {
      addTask(title);
      setTitle("");
    }
    if(state) {
      let editedTaskList = tasks.map(task => {
        if(task.id === editId) {
          return {
            ...task,
            title: title
          }
        }
        return task;
      })
      setTasks(editedTaskList)
    }
    setIsEdited({ state: false, editId: "" });
  }

  useEffect(() => {
    if (!state) {
      setTitle("");
    }
  }, [state]);

  return (
    <header className={styles.header}>
      <div className={styles.imgs}>
        <img src={rocket} alt="rocket" className={styles.rocket}></img>
        <img src={todo} alt="todo"></img>
      </div>
      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a new task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoComplete="off"
          ref={input}
        />
        <button type="submit">
          {state ? "Edit" : "Create"} <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}

export default Header