import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Task from './pages/Task';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { AuthProvider } from './context/AuthContext';
import { TaskProvider } from './context/TaskContext';
import AddTask from './pages/AddTask';

function App() {
  return (
    <BrowserRouter>
     <AuthProvider>
      <TaskProvider>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index  element={<Home/>} />
          <Route path='Login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='addtask' element={<AddTask />} />
          <Route path='profile' element={<Profile />} />
          <Route path='task/:id' element={<Task />} />
       
      </Route>
      </Routes>
   
      </TaskProvider>
    </AuthProvider>
    </BrowserRouter>
    
  );
}

export default App;
