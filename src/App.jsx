import { useState } from 'react'
import './App.css'
import { articles } from './assets/articleData'


let disabled = true;
function App() {
  const [articleList, setArticleList] = useState(articles);
  const [newArticle, setNewArticle] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setArticleList([...articleList, newArticle]);
    disabled = true;
    setNewArticle('');
  }
  function removeArticle(toBeDeletedIndex) {
    const updatedArticleList = articleList.filter((article, filterIndex) => {
      return filterIndex !== toBeDeletedIndex;
    });
    setArticleList(updatedArticleList);
  }
  return (
    <>
      <h1>Articles</h1>
      {/* article list  */}
      <ul>
        {articleList.map((article, index) => {
          return (
            <li key={index} className='article'>
              <span>
                {article}
              </span>
              <button onClick={() => removeArticle(index)}>X</button>
            </li>
          )
        })}
      </ul>
      {/* new article form  */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="newTitle">
          Input new article title
        </label>
        <input
          id='newTitle'
          type="text"
          value={newArticle}
          onChange={(event) => {
            if (newArticle != '') disabled = false;
            return (
              setNewArticle(event.target.value)
            )
          }} />
        <button disabled={disabled}>submit</button>
      </form>
    </>
  )
}

export default App
