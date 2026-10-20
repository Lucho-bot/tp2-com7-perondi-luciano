import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'


const App = () => {
  const nombre = "Luciano Perondi"
  const profesion = "Estudiante de programacion"
  const email = "lucianoperondi90@gmail.com"

  return (
    <BrowserRouter>
      <Header nombre={nombre} profesion={profesion} />
      <main className="container">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </main>
      <Footer nombre={nombre} email={email} />
    </BrowserRouter>
  )
}

export default App
