import React, { useEffect, useState } from "react";
import NewsItem from "../components/NewsItem";

export default function News() {
  const [articles, setArticles] = useState(null);
  const [page, setpage] = useState(1);
  // const [totalResults, settotalResults] = useState(null);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=bd3c695c98ce410a8e58f0185bf5a92a&page=${page}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setArticles(data.articles);
        // setpage(1);
        // settotalResults(data.totalResults);
        //     console.log(totalResults);
      });
    }, []);
    
    const handlePreviousClick = () => {
      if(page>1)
      {
        setpage(page-1);
        fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=bd3c695c98ce410a8e58f0185bf5a92a&page=${page}`
        )
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            // console.log(data.totalResults);
            setArticles(data.articles);
            // setpage(1);
          });
      }
      console.log(page);
    };
    
    const handleNextClick = () => {
      // if(page+1 > Math.ceil())
      setpage(page+1);
      fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=bd3c695c98ce410a8e58f0185bf5a92a&page=${page}`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setArticles(data.articles);
          // setpage(1);
        });
      console.log(page);
  };

  return (
    <div className="container my-4">
      <h2>News Zoom - Top Headlines</h2>
      {articles && (
        <div className="row">
          {articles.map((article) => {
            return (
              <div className="col-md-4" key={article.url}>
                {/* <NewsItem title={article.title} description={article.description} imageUrl={article.urlToImage} /> */}
                <NewsItem
                  title={article.title ? article.title.slice(0, 40) : ""}
                  description={
                    article.description ? article.description.slice(0, 80) : ""
                  }
                  imageUrl={article.urlToImage || ""}
                  newsUrl={article.url || ""}
                />
              </div>
            );
          })}
        </div>
      )}
      <div className="container d-flex justify-content-between my-4">
        <button
        disabled={page <= 1} 
        type="button" class="btn btn-secondary" onClick={handlePreviousClick}>
        &larr; Previous
        </button>
        <button type="button" class="btn btn-secondary" onClick={handleNextClick} >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}
