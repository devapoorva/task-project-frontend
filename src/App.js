import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import TaskPage from './pages/tasks/TaskPage';
import CreateTaskPage from './pages/create/CreateTask';
import Layout from './layout/Layout';
import UpdateTaskPage from './pages/update/UpdateTask';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<TaskPage />} />
            <Route path="/create-task" element={<CreateTaskPage />} />
            <Route path="/update-task/:id" element={<UpdateTaskPage />} />
          </Route> 
        </Routes>
    </Router>
  );
}

export default App;
