import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [];
    constructor() {

        super();
        console.log("news component constructor");
        this.state = {
            articles : this.articles,
            loading : false,
            page : 1,
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=b39695b2fd8142b9b326058fdbe11351&page=1";

        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({articles: parseData.articles});
    }

    prevClick = () =>{

    }

    nextClick = () =>{

    }

  render() {
    return (
    <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        
        <div className="row">
        {this.newArr = this.state.articles.map((article) =>{
            // console.log(article);
           return  <div key={article.url} className="col-md-4 mx-3 my-3">
        <NewsItem title={article.title} description={article.description} imageUrl={article.urlToImage} newsUrl={article.url} />
            </div>
        })}

        

        {/* {console.log(this.newArr)} */}
            
        </div>

        <div className="container">
  <nav aria-label="Page navigation example">
  <ul className="pagination d-flex justify-content-between" >
    <li className="page-item">
      <a className="page-link" href="/" aria-label="Previous" onClick={this.prevClick}>
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>

    <li className="page-item">
      <a className="page-link" href="/" onClick={this.nextClick} aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
  </div>


      </div>
    )
  }
}

export default News