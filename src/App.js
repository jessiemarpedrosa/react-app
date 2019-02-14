import React, { Component } from 'react';
import BlogPosts from './components/BlogPosts';
import axios from 'axios';
//import ReactPaginate from 'react-paginate';

class App extends Component {

state = {
  blogPosts: [],
  blogImages: [],
  blogAuthors: []
}

componentDidMount() {
  axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=15`)
    .then(res => {
      const blogPosts = res.data;
      this.setState({blogPosts});
    })

  axios.get('https://jsonplaceholder.typicode.com/photos?_limit=30')
    .then(res =>{
      const blogImages = res.data;
      this.setState({blogImages});
    })

  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res =>{
      const blogAuthors = res.data;
      this.setState({blogAuthors});
    }) 
}

render() {
 
    return (
      <div className="App">
        <div className="container">

            <h2>My first React App using ReactJS & JSON</h2>
            <p>By Masie</p>
            <br></br>

            <BlogPosts blogAuthors={this.state.blogAuthors} blogPosts={this.state.blogPosts} blogImages={this.state.blogImages} />
        
        </div> 
      </div>
    );
  }

}

export default App;
