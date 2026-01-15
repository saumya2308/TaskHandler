import { useState, useRef } from "react"

export const AddTask = ({tasks, setTasks}) => {

    // const[taskValue, setTaskValue] = useState("");
    const[progress, setProgress] = useState(false);
    const taskRef = useRef();

    // const handleChange = (e) => {
    //     console.log(taskRef.current.value);
    // }

    const handleReset = (event) => {
        // setTaskValue("");
        taskRef.current.value="";
        setProgress(false);
    }

    const handleSubmit =(event) => {
        event.preventDefault();
        const task ={
            id: Math.floor(Math.random()*10000),
            name: taskRef.current.value,
            completed: Boolean(progress)
        }
        setTasks([...tasks, task]);
        handleReset();
    }

    return (
        <>
        <section className="addtask">
            <form onSubmit={handleSubmit}>
                <input type="text" name ="task" id="task" placeholder="Task Name" autoComplete="off" ref={taskRef} required/>
                <select onChange={(e)=> setProgress(e.target.value)} value={progress}>
                    <option value="true">Completed</option>
                    <option value="false">Pending</option>
                </select>
                <button type="submit">Add Task</button>
                <button onClick={handleReset} className="reset" type="reset">Reset</button>
            </form>
            {/* <p>{taskValue}</p> */}
        </section>
        </>
    )
    }
