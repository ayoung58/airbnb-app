import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './components/Nav';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Nav />
      <Header />
    </div>
  )
}
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
