import React, { useEffect, useState } from "react";
import TaskForm from "../../component/TaskForm";
import { useParams } from "react-router-dom";

const UpdateTaskPage = () => {
    const params= useParams();
    const [task, setTask] = useState({});

    useEffect(async ()=>{
        try {
            const response = await fetch(`http://localhost:4000/tasks/${params.id}`);  
            if (!response.ok) {
              throw new Error('Failed to fetch tasks');
            }
            const data = await response.json();
            setTask(data.data); 
          } catch (error) {
            console.error('Error fetching tasks:', error.message);
        }
    },[])
    const handleSubmit = (data)=>{
        console.log(data);
    }

    return (
        <React.Fragment>
            <div className="">
                <h1>UpdateTaskPage</h1>
                <TaskForm taskData={task}/>
            </div>
        </React.Fragment>
    );
}
export default UpdateTaskPage;