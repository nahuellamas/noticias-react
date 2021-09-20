import {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ListNews from './components/ListNews';

function App() {
  const [categoria, SetCategoria] = useState('');
  const [news, setNews] = useState([]);
  useEffect(() => {
    const consultAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=07c1cd09271743e6a52b123fcbd9f6b7`;
      const response = await fetch(url);
      const news = await response.json();
      setNews(news.articles);
    }
    consultAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header 
        titulo="Noticias"
      />
      <div className="container">
        <Form 
          SetCategoria={SetCategoria}
        />
        <ListNews
          news={news}
        />
      </div>
    </Fragment>
  );
}

export default App;
