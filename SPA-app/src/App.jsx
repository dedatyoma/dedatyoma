import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import AboutMe from './pages/AboutMe'
import ErrorBoundary from './components/ErrorBoundary'
import ThemeContext from './context/ThemeContext'
import './App.css'

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
 <ThemeContext.Provider value={{isDarkTheme, setIsDarkTheme}}>
  <div 
    className={isDarkTheme ? 'dark-theme' : 'light-theme'}
    style={{ minHeight: '100vh' }}
  >
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<AboutMe/>}/>
            <Route path='contacts' element={<Contacts/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </div>
 </ThemeContext.Provider>
  )
}

export default App
