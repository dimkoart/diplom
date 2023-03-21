import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Registration from './pages/Registration'
import './App.css'
import UserPage from './pages/UserPage'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/UserPage' replace />} />
      <Route path='/login' element={<Login />} />
      <Route path='/registration' element={<Registration />} />
      <Route path='/UserPage' element={<UserPage />} />
    </Routes>
  )
}

export default App
