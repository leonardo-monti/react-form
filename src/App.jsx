import './App.css'
import articles from './data/articles'


function App() {
  return (
    <div className="container">
      <h1>Coding Languages</h1>

      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}

      </ul>

    </div>


  )


}

export default App
