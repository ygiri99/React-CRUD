import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import User from './components/User';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import Adduser from './components/Adduser';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path='user' element={<User />}/>
          <Route path='profile' element={<Profile />}/>
          <Route path='adduser' element={<Adduser/>}/>
          <Route path='updateuser' element={<UpdateUser/>}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
