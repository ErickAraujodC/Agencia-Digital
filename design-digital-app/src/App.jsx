import React, {useState} from 'react'
import About from './components/About'
import './App.css'
import Header from './components/Header'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Banner from './components/Banner'

function App(){
  const [isDarkTheme, setDarkTheme] = useState(false)
  const changeTheme = () => setDarkTheme(!isDarkTheme)
  return (
    <div className="App">
      <Header 
      isDarkTheme = {isDarkTheme}
      changeTheme={changeTheme}/>
      <Banner isDarkTheme = {isDarkTheme}/>
      <About isDarkTheme = {isDarkTheme}/>
      <Contact isDarkTheme = {isDarkTheme}/>
      <Footer isDarkTheme = {isDarkTheme}/>
    </div>
  )
}

export default App
