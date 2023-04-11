import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Registration from './pages/Registration'
import './App.css'
import UserPage from './pages/UserPage/UserPage'
import HomePage from './pages/HomePage/HomePage'
import FilmsPage from './pages/FilmsPage'
import AdminPage from './pages/AdminPage/AdminPage'
import { ThemeProvider } from 'styled-components'
import { useEffect, useState } from 'react'
import { dark, light } from './constants/colors'
import Header from './component/header/Header'

function App() {
  const [theme, setTheme] = useState(dark)

  useEffect(() => {
    if (
      localStorage.getItem('theme') != '' &&
      localStorage.getItem('theme') != null
    ) {
      setTheme(localStorage.getItem('theme') === 'light' ? dark : light)
    }
  }, [])
  const toggleTheme = (): void => {
    setTheme(theme.name === 'light' ? dark : light)
    if (theme != null) {
      localStorage.setItem('theme', theme.name)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Header />
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
        <Route
          path='/userPage/*'
          element={
            <UserPage toggleTheme={toggleTheme} isDarkTheme={theme.name} />
          }
        />
        <Route path='/filmPage/:id' element={<FilmsPage />} />
        <Route
          path='/userPage/'
          element={<Navigate to='/userPage/favorites' replace />}
        />
      </Routes>
    </ThemeProvider>
  )
}

export default App
