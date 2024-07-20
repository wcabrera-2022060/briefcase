import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from './components/About.jsx'
import { Contact } from './components/Contact.jsx'
import { Home } from './components/Home.jsx'
import { Layout } from './components/Layout.jsx'
import { Projects } from './components/Projects.jsx'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
