import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'


const App = () => {
  const nombre = "Luciano Perondi"
  const profesion = "Estudiante de programacion"
  const email = "lucianoperondi90@gmail.com"
  const instagram = "lucianoperondi"

  return (
    <BrowserRouter>
      <Header nombre={nombre} profesion={profesion} />
      <div className="container-fluid">
        <div className="row">
          <aside className="col-md-4 bg-light p-3">
            <Sidebar />
          </aside>
          <main className="col-md-8 p-4">
            <Routes>
              <Route path="/" element={<Home nombre={nombre} />}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/skills" element={<Skills/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
          </main>
        </div>
      </div>
      <Footer nombre={nombre} email={email} instagram={instagram} />
    </BrowserRouter>
  )
}



export default App
