import { useState } from 'react'
import './App.css'
import articlesData from './data/articlesData'



function App() {

  const [articles, setArticles] = useState(articlesData)
  const [newTitle, setNewTitle] = useState("")

  return (
    <div className="container">
      <h1>Coding Languages</h1>

      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
      <form onSubmit={e => {
        e.preventDefault()
        if (!newTitle.trim()) return
        setArticles([...articles, { id: articles.length + 1, title: newTitle }])
        setNewTitle("")
      }}>
        <input
          value={newTitle}
          onChange={e => setNewTitle(e.target.value)}
          placeholder="New article"
        />
        <button type="submit">Aggiungi</button>

      </form>

    </div>


  )


}

export default App