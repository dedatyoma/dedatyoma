import {useContext} from 'react'
import {Outlet, Link} from 'react-router-dom'
import ThemeContext from '../context/ThemeContext'

function Layout(){
  const {isDarkTheme, setIsDarkTheme} = useContext(ThemeContext)

  const toggleTheme = () => {
    console.log('Current theme:', isDarkTheme)
    setIsDarkTheme(!isDarkTheme)
    console.log('Theme after toggle:', !isDarkTheme)
  }

  return(
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="contacts">Contacts</Link>
          <Link to="about">About me</Link>
          <button 
            onClick={toggleTheme}
            style={{ 
              cursor: 'pointer',
              padding: '8px 16px',
              margin: '0 8px'
            }}
          >
            {isDarkTheme ? '☀️ Light' : '🌙 Dark'}
          </button>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}
 export default Layout;