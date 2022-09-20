import React from 'react';
import styles from "./task.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiFillEdit } from 'react-icons/ai';

const task = ({ task, onComplete, handleDelete, handleEdit, input, setTitleInput }) => {
  let { id, title, isCompleted } = task;

  let handleClick = () => {
    setTitleInput(title)
    handleEdit(id)
    input.current.focus();
  }

  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => onComplete(task.id)}
      >
        {isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>
      <p className={isCompleted ? styles.textCompleted : ""}>{title}</p>
      <button
        className={styles.deleteButton}
        onClick={() => handleDelete(task.id)}
      >
        <TbTrash size={20} />
      </button>
      <button className={styles.edit} onClick={() => handleClick()}>
        <AiFillEdit size={20} />
      </button>
    </div>
  );
};

export default task