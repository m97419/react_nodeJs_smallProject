import './App.css';
import Navbar from './components/Navbar';
import { Route, Router, Routes } from 'react-router-dom';
import Users from './components/Users/Users';
import Tasks from './components/Tasks/Tasks';
import Posts from './components/Posts/Posts';
import HomePage from './components/homepage';
import myStore from './store';
import { Provider } from 'react-redux';
import LoadData from './components/LoadData';

function App() {

  return (
  <Provider store={myStore}>
  <div ><Navbar/></div>
  <LoadData/>
  
  <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path="/users" element={<Users/>}></Route>
    <Route path="/tasks" element={<Tasks />}></Route>
    <Route path="/posts" element={<Posts/>}></Route>
</Routes>
</Provider>
  );
}

export default App;
