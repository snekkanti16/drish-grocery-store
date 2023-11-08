import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';

import './Blogs.css';
const blogs = [
    {'id':1,'blogImage':'image/blog-1.jpg','blogUser':'by NSL','blogDate':'8th Nov, 2023','blogHeading':'Organic Vegetables And Fruits','blogDesc':'DRISH Grocery Store'},
    {'id':2,'blogImage':'image/blog-2.jpg','blogUser':'by NSL','blogDate':'8th Nov, 2023','blogHeading':'Organic Vegetables And Fruits','blogDesc':'DRISH Grocery Store'},
    {'id':3,'blogImage':'image/blog-3.jpg','blogUser':'by NSL','blogDate':'8th Nov, 2023','blogHeading':'Organic Vegetables And Fruits','blogDesc':'DRISH Grocery Store'}
    ];

const Blogs= () => {
   
    return (
      <section className="blogs" id="blogs">
        <h1 className="heading">
          our
          {' '}
          <span>blogs</span>
        </h1>
        <div className="box-container">
            {
                blogs.map(blog => {
                    return (<div key={blog.id} className="box">
            <img src={blog.blogImage} alt="" />
            <div className="content">
              <div className="icons">
                <a href="/">
                  <i>
                    <FontAwesomeIcon icon={faUser} />
                  </i>
                 {blog.blogUser}
                </a>
                <a href="/">
                  <i>
                    <FontAwesomeIcon icon={faCalendar} />
                  </i>
                  {blog.blogDate}
                </a>
              </div>
              <h3>{blog.blogHeading}</h3>
              <p>
              {blog.blogDesc}
              </p>
              <a href="/" className="btn">
                read more
              </a>
            </div>
          </div>);
                })
            }
          
        </div>
      </section>
    );
}
export default Blogs;
