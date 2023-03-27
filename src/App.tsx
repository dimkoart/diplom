import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Registration from './pages/Registration'
import './App.css'
import UserPage from './pages/UserPage/UserPage'
// import Header from './component/header/Header'
function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Navigate to='/userPage' replace />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/userPage/*' element={<UserPage />} />
        <Route
          path='/userPage/'
          element={<Navigate to='/userPage/favorites' replace />}
        />
      </Routes>
    </>
  )
}

export default App
