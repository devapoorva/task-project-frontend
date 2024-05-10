import React from "react";
import TaskForm from "../../component/TaskForm";

const CreateTaskPage = (props) => {

    return (
        <React.Fragment>
            <div className="">
                <h1>CreateTaskPage</h1>
                <TaskForm taskData="" />
            </div>
        </React.Fragment>
    );
}
export default CreateTaskPage;