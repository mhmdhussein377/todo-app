import React from 'react';
import styles from "./tasks.module.css";
import Task from "../Task"

const index = ({tasks, onComplete, handleDelete, handleEdit, input, titleInput, setTitleInput}) => {

    let tasksQuantity = tasks.length;
    let completedTasks = tasks
        .filter(task => task.isCompleted)
        .length;

    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Created Tasks</p>
                    <span>{tasksQuantity}</span>
                </div>
                <div>
                    <p className={styles.textPurple}>Completed</p>
                    <span>
                        {completedTasks}
                        of {tasksQuantity}
                    </span>
                </div>
            </header>

            <div className={styles.list}>
                {tasks
                    ?.map((task) => (<Task task={task} key={task.id} onComplete={onComplete} handleDelete={handleDelete} handleEdit={handleEdit} input={input} title={titleInput} setTitleInput={setTitleInput}/>))}
            </div>
        </section>
    );
};

export default index