import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BlogPosts extends Component {

getFeatured(){

}

render() {

    return (

        <div className="posts-container">
          
            { this.props.blogPosts.map((blogPost) => (
                <div className="post"> 
                    <div className="featured_image">
                        { this.props.blogImages.map((blogImage, index) => { 
                                if( blogPost.id === blogImage.id ){
                                    const featuredImgURL = blogImage.url;
                                    return (
                                        <img alt="" title="" key={index} src={featuredImgURL} />
                                        )        
                                    }
                                return null;
                                })
                        }      
                    </div>
                    <h3>{ blogPost.title.slice(0,20).toUpperCase() }</h3>
                    <p>{ blogPost.body.charAt(0).toUpperCase() + blogPost.body.slice(1,170) + ' ...' }</p>
                    <span className="posted_by">Posted by : 
                    
                        { this.props.blogAuthors.map((blogAuthor, index) => {
                            if( blogPost.userId === blogAuthor.id ){
                                const authorName = blogAuthor.name;
                                return (
                                    <span key={index}> {authorName}</span>
                                    )        
                                }
                            return null;
                            })
                        }
                        
                    </span>                       
                    <a href="http://www.google.com" className="readmore">Read More</a>  
                </div>    
            ))
        }

        </div>
    );
    
  }

}

BlogPosts.propTypes ={
    blogPosts: PropTypes.array.isRequired
}


export default BlogPosts;
