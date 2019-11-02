import React, { useState,useEffect } from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from'react-router-dom/Route';

export const Home=(props)=>
{
    // constructor() {
    //     super();

    //     this.state = {
    //         data: ""
    //     }
    // }



    //    async componentWillMount() {
    //     await fetch(`https://jsonplaceholder.typicode.com/posts`)
    //         .then(result => result.json())
    //         .then((data1) => {
    //             console.log(data1)
    //             this.setState({ data: data1 })
    //         })
    // }

  
    const [post_data,setPostData]=useState();
    const [isLoaded,setIsLoaded]=useState(false);


     useEffect(()=>{

        console.log(isLoaded);

        if(!isLoaded)
        {
         console.log('fetching.......',post_data)
         

         fetch(`https://jsonplaceholder.typicode.com/posts`)
                .then(result => result.json())
                .then((data1) => {
                    console.log(data1)
                    setPostData( data1 );

                    setIsLoaded(true);
                })
            }
                return ()=>{console.log('home unmounted')}


       // setPostData(10);

                

    },[]);

   
    console.log('fetched',post_data,isLoaded)
        //console.log(post_data)
        return (

            <div className='list-group'>
                <div className='App-header'>Home</div>
                    {post_data && post_data.map((post, index) => 
                        <Link to={`postdetails/${post.id}`} className='linkstyle list-group-item list-group-item-info' key={index}>{post.title}</Link>  
                    )}
            </div>



        );
    
}