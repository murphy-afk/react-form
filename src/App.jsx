import { useState } from 'react'
import './App.css'
import { articles } from './assets/articleData'

function handleChange() {
  return 
}

function App() {
  const [newArticle, setNewArticle] = useState('new article')

  return (
    <>
      <h1>Articles</h1>
      {/* article list  */}
      <ul>
        {articles.map((article, index) => {
          return (
            <li key={index}>{article}</li>
          )
        })}
      </ul>
      {/* new article form  */}
      <form action="submit">
        <label htmlFor="newTitle">
          Input new article title
        </label>
        <input id='newTitle' type="text" value={newArticle} onChange={handleChange}/>
      </form>
    </>
  )
}

export default App
