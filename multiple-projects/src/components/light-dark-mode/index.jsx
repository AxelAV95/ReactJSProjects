import React from 'react'
import useLocalStorage from './useLocalStorage'
import './styles.css'

function LightDarkMode() {

    const [theme, setTheme] = useLocalStorage('theme', 'dark')

    function handleToggleTheme(){
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
  return (
    <div className='light-dark-mode' data-theme={theme}>
      <div className='container'>
            <p>Hello world</p>
            <button onClick={handleToggleTheme}>Change theme</button>
      </div>
    </div>
  )
}

export default LightDarkMode 
