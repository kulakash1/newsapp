import React, { useEffect, useState } from "react";
import NewsItem from "../components/NewsItem";
// import path from "path";
// import fs from "fs";

// import fs from 'fs-extra'
// const fs = require('fs');

export default function News() {
  const [articles,setArticles] = useState(null);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=bd3c695c98ce410a8e58f0185bf5a92a&pageSize=100')
    .then(res => {
      // console.log(res.json(),"newData");
      return res.json();
    })
    .then(data => {
      
      // const filePath = path.join('./src/data', 'sampleOutput.json');
      // fs.writeFile(filePath, JSON.stringify(data.articles), (err) => {
      //   if (err) {
      //     console.error('Error writing to file:', err);
      //   } else {
      //     console.log('Data written to sampleOutput.json');
      //   }
      // });

      setArticles(data.articles);
      console.log(data);
      console.log(articles);
    })


  },[]);

  return (
    <div className="container my-4">
      <h2>News Zoom - Top Headlines</h2>
      {articles && 
      <div className="row">
      {articles.map((article) => {
      return (
        <div className="col-md-4" key={article.url}>
        {/* <NewsItem title={article.title} description={article.description} imageUrl={article.urlToImage} /> */}
        <NewsItem
  title={article.title ? article.title.slice(0, 40) : ""}
  description={article.description ? article.description.slice(0, 80) : ""}
  imageUrl={article.urlToImage || ""}
  newsUrl={article.url || ""}
/>
      </div>
      );

      })}
      </div>
      }
    </div>
  );
}
