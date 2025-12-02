import { useState } from 'react'
import './App.css'
import { articles } from './assets/articleData'
import Article from './components/Article';


function App() {
  const [articleList, setArticleList] = useState(articles);
  const [newArticle, setNewArticle] = useState('');
  // const [disabled, setDisabled] = useState(true)

  const disabled = newArticle.trim() === '';

  function handleSubmit(event) {
    event.preventDefault();
    setArticleList([...articleList, newArticle]);
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
            <Article article={article} remove={() => removeArticle(index)} key={index} />

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
            const inputValue = event.target.value;
            setNewArticle(inputValue);
          }} />
        <button disabled={disabled}>submit</button>
      </form>
    </>
  )
}

export default App
