import { useState } from "react";
import { Header } from "./components/Header";
import { ShowTask } from "./components/ShowTask";
import { AddTask } from "./components/AddTask";
import './App.css';

function App() {

  const [tasklist, setTasklist] = useState([]);
  const [task, setTask] = useState({});

  return (
    <div className="App">
      <Header />
      <main>
        <AddTask 
        tasklist= { tasklist } setTasklist={ setTasklist }
        task = { task } setTask= { setTask } />
        <ShowTask tasklist= { tasklist } setTasklist={ setTasklist }
        task = { task } setTask= { setTask }  />
      </main>
    </div>
  );
}

export default App;