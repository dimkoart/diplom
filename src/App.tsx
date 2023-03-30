import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Registration from './pages/Registration'
import './App.css'
import UserPage from './pages/UserPage/UserPage'
import HomePage from './pages/HomePage/HomePage'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import FilmsPage from './pages/FilmsPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/userPage' replace />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home/*' element={<HomePage />} />
      <Route path='/home/' element={<Navigate to='/home/films' replace />} />
      <Route path='/registration' element={<Registration />} />
      <Route path='/userPage/*' element={<UserPage />} />
      <Route path='/filmPage' element={<FilmsPage />} />
      <Route
        path='/userPage/'
        element={<Navigate to='/userPage/favorites' replace />}
      />
    </Routes>
  )
}

export default App
