import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import Header from "./components/Header"
import Tasks from "./components/tasks";



function App() {

  let [tasks, setTasks] = useState(getLocal());
  let [isEdited, setIsEdited] = useState({state: false, editId: null});
  let [title, setTitle] = useState("");
  let input = useRef();

  console.log(isEdited)

  function getLocal() {
    let tasks = localStorage.getItem("tasks");

    if (tasks) {
      return JSON.parse(tasks);
    } else {
      return [];
    }
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },[tasks]);

  function addTask(taskTitle) {
    let newTask = [
      ...tasks,
      {
        id: Date.now(),
        title: taskTitle,
        isCompleted: false,
      },
    ];
    setTasks(newTask)
  }

  function handleDelete(id) {
    let newTask = tasks.filter(item => item.id !== id);
    setTasks(newTask);
  }

  function toggleCompleted(taskId) {
    let newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return (
            {
              ...task,
              isCompleted: !task.isCompleted
            }
        )
      }
      return task;
    });
    setTasks(newTasks);
  }

  function handleEdit(taskId) {
    setIsEdited((old) => {
      return { state: !old.state, editId: taskId };
    });
  }

  return (
    <>
      <Header
        addTask={addTask}
        isEdited={isEdited}
        tasks={tasks}
        setTasks={setTasks}
        setIsEdited={setIsEdited}
        handleEdit={handleEdit}
        input={input}
        title={title}
        setTitle={setTitle}
      ></Header>
      <Tasks
        tasks={tasks}
        onComplete={toggleCompleted}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        input={input}
        titleInput={title}
        setTitleInput={setTitle}
      ></Tasks>
    </>
  );
}

export default App
