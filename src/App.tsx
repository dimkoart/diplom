import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Registration from './pages/Registration'
import './App.css'
import UserPage from './pages/UserPage/UserPage'
import HomePage from './pages/HomePage/HomePage'
import FilmsPage from './pages/FilmsPage'
import AdminPage from './pages/AdminPage/AdminPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' replace />} />
      <Route path='/login' element={<Login />} />
      <Route path='/adminPage/*' element={<AdminPage />} />
      <Route
        path='/adminPage/'
        element={<Navigate to='/adminPage/users' replace />}
      />
      <Route path='/home/*' element={<HomePage />} />
      <Route path='/home/' element={<Navigate to='/home/films' replace />} />
      <Route path='/registration' element={<Registration />} />
      <Route path='/userPage/*' element={<UserPage />} />
      <Route path='/filmPage/:id' element={<FilmsPage />} />
      <Route
        path='/userPage/'
        element={<Navigate to='/userPage/favorites' replace />}
      />
    </Routes>
  )
}

export default App
