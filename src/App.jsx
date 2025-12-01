import { useState } from 'react'
import './App.css'
import { articles } from './assets/articleData'


function App() {
  const [articleList, setArticleList] = useState(articles)
  const [newArticle, setNewArticle] = useState('')
  
  function handleSubmit(event) {
    event.preventDefault();
    setArticleList([newArticle, ...articles]);
    setNewArticle('');
  }

  return (
    <>
      <h1>Articles</h1>
      {/* article list  */}
      <ul>
        {articleList.map((article, index) => {
          return (
            <li key={index}>{article}</li>
          )
        })}
      </ul>
      {/* new article form  */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="newTitle">
          Input new article title
        </label>
        <input id='newTitle' type="text" value={newArticle} onChange={(event) => setNewArticle(event.target.value)}/>
        <button>submit</button>
      </form>
    </>
  )
}

export default App
