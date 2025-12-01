import { useState } from 'react'
import './App.css'
import { articles } from './assets/articleData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Articles</h1>
      <ul>
        {articles.map(article => {
          return (
            <li>{article}</li>
          )
        })}
      </ul>
    </>
  )
}

export default App
