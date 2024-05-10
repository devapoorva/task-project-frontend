import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TaskPage = (props) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
          try {
            const response = await fetch('http://localhost:4000/tasks');  
            if (!response.ok) {
              throw new Error('Failed to fetch tasks');
            }
            const data = await response.json();
            setTasks(data.data); 
          } catch (error) {
            console.error('Error fetching tasks:', error.message);
          }
        };
    
        fetchTasks();
      }, []);

    return (
        <React.Fragment>
            <div className="">
                <h1>All Tasks</h1>
                <div className="text-end">
                    <Link to="/create-task" className="btn btn-primary">Create Task</Link>
                </div>
                <div className="">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Due Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task,index)=>(
                                <tr key={index}>
                                    <td>{task.title}</td>
                                    <td>{task.description}</td>
                                    <td>{task.dueDate}</td>
                                    <td>
                                        <Link to={{ pathname: `/update-task/${task._id}` }}>Update Task</Link>
                                    </td>
                                </tr>  
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    );
}
export default TaskPage;