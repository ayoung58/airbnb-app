import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './components/Nav';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Body />
    </div>
  )
}
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
