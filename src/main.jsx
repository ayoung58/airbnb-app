import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './components/Nav';
import Header from './components/Header';
import Body from './components/Body';
import data from "./data"

function App() {
  const cards = data.map(item => {
    return (
      <Body 
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <div>
      <Nav />
      <Header />
      <section>
        {cards}
      </section>
    </div>
  )
}
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
