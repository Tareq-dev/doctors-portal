import React from 'react';
import BlogPost from './BlogPost';
import Female from '../../images/people-2.png';

const blogData=[
     {
          name:"Dr. Caudi",
          date: "24 April 2021",
          title: "2 times of brush in a day can Keep you healthy",
          img: Female , 
          descriptor: "This is a longer card with supporting text below as a natural text below as a natural text below as a natural text below as a natural text below as a natural "
     },
     {
          name:"Dr. Caudi",
          date: "24 April 2021",
          title: "2 times of brush in a day can Keep you healthy",
          img: Female , 
          descriptor: "This is a longer card with supporting text below as a natural text below as a natural text below as a natural text below as a natural text below as a natural "
     },
     {
          name:"Dr. Caudi",
          date: "24 April 2021",
          title: "2 times of brush in a day can Keep you healthy",
          img: Female , 
          descriptor: "This is a longer card with supporting text below as a natural text below as a natural text below as a natural text below as a natural text below as a natural "
     }
]

const Blogs = () => {
     return (
        <section className="testimonial my-4 py-4">
        <div className="container">
        <div className="my-5 py-5">
        <h5 className="text-primary">OUR BLOG</h5>
        <h1>From Our Blog News</h1>
        </div>
        <div class="card-deck">
        
          {
               blogData.map(blog=><BlogPost blog={blog}></BlogPost>)
          }       
        </div>
        </div>
        </section>
     );
};

export default Blogs;