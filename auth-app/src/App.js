import './App.css';
import SingUp from './components/SingUp';
import {Routes,Route, Navigate} from 'react-router-dom'
import SignIn from './components/SignIn';
import Profile from './components/Profile';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<SignIn/>}/>
        <Route path='/' element={<SingUp/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/profile' element={<Navigate to="/profile"/>}/>
      </Routes>
    </div>
  );
}

export default App;
