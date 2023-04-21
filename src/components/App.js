import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList"
console.log(blogData);

function App() {
  const {about, image, name} = blogData
  return (
    <div className="App">
      <Header name={name} />
      <About about={about} image={image} />
      <ArticleList />
    </div>
  );
}

export default App;
