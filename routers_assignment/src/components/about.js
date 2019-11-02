import React, { Component } from 'react';

export const About=()=>
{
    return (

        <div>
          <div className='App-header'>About this project</div>
          <div className='about'>This is the webpage getting posts from Api <a href='https://jsonplaceholder.typicode.com/posts'> https://jsonplaceholder.typicode.com/posts </a>  
            and rendering their details. <br/>On Home page click on any post title and get its details.
          </div>

    </div>
    
    );
}