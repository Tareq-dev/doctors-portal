import React from 'react';

const BlogPost = ({blog}) => {
     
     return (
          <div class="card">
          <div class="card-body">
          <div className="d-flex mt-5 ml-5">
          <div className="mr-3"><img style={{height:'50px', width:'50px'}} src={blog.img} class="" alt="..."/></div>
          <div>
          <h5 class="card-title text-primary">{blog.name}</h5>
          <p class="card-text py-0"><small class="text-muted">{blog.date}</small></p>
          <div className="m-0">
          <h5>{blog.title}</h5> 
          </div>
         
          </div>
          </div>
          <p class="card-text text-secondary">This is a longer card with supporting text below as a natural 
          lead-in to additional content. This content is a little bit longer longer card with 
          little bit longer.</p>
          </div>
          </div>
     );
};

export default BlogPost;