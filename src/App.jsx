import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Projects, Contact } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="py-10 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <a href="#home" className="text-sm font-medium text-slate-700 hover:text-slate-900">Back to top</a>
        </div>
      </footer>
    </div>
  )
}

export default App
