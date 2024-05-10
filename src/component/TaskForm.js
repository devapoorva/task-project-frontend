import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TaskForm = ({ taskData }) => {
    const [task, setTask] = useState({
        title: taskData ? taskData.title : '',
        description: taskData ? taskData.description : '',
        dueDate: taskData ? taskData.dueDate : ''
    });
    const navigate = useNavigate();
    const [isSubmit, setSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = async  (e) => {
        e.preventDefault();
        if (!task.title.trim() || !task.dueDate.trim() || !task.description.trim()) return;
        if (taskData && taskData.title) {
            const response = await fetch('http://localhost:4000/tasks', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            });
            console.log('Task updated successfully');
            if(response.ok){
                navigate("/");
            }else{
                //throw new Error('Failed to add task');
                console.log(response)
            }
        }else{
            console.log(task)
            const response = await fetch('http://localhost:4000/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            });
            console.log('Task added successfully');
            if(response.ok){
                navigate("/");
            }else{
                //throw new Error('Failed to add task');
                console.log(response)
            }
        }
    };


    return (
        <React.Fragment>
            <div className='row'>
                <div className='col-md-8'>
                    <form onSubmit={handleSubmit} id='form'>
                        <div className='form-group'>
                            <label>Title</label>
                            <input required placeholder='Enter Title' className='form-control' type='text' name='title' value={task.title} onChange={handleChange} />
                        </div>
                        <div className='form-group'>
                            <label>Description</label>
                            <input required placeholder='Enter Description' className='form-control' type='text' name='description' value={task.description} onChange={handleChange} />
                        </div>
                        <div className='form-group'>
                            <label>Due Date</label>
                            <input required placeholder='Enter Due Date' className='form-control' type='date' name='dueDate' value={task.dueDate} onChange={handleChange} />
                        </div>
                        <div>
                            <button type='submit' className='btn btn-primary'>{taskData != null && taskData.title != "" ? 'Add Task' : "Update Task"}</button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}
export default TaskForm;