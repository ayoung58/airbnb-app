import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './components/Nav';
import Header from './components/Header';
import Body from './components/Body';
import Card from './components/Card';
import data from "./data"

function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <div>
      <Nav />
      <Header />
      <div className='flex ml-14 gap-48'>
        <Body />
        <section className='flex flex-nowrap overflow-x-auto gap-5'>
          {cards}
      </section>
      </div>
    </div>
  )
}
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
