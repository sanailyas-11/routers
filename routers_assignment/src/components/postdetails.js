import React ,{useEffect,useState} from 'react';

// export class Details extends React.Component {
// constructor(props){
//     super(props);
//     this.state={
//         id:this.props.match.params.id,
//         data:''
//     }
// }

// async  componentWillMount() {
//     await fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`)
//         .then(result => result.json())
//         .then((data1) => {
//             console.log(data1)
//             this.setState({ data: data1 })
//         })


// }
   

export const Details=(props)=> {

    
        const [post_data,setPostData]=useState({});
        const[id,setId]=useState(props.match.params.id,);



       useEffect(()=>{

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(result => result.json())
        .then((data1) => {
            console.log(data1)
            setPostData( data1 )
        })

        return ()=>{console.log('details unmounted')}

       },[]);

       console.log(id,post_data);
        return (
            <div className='container'>
                <div className='App-header'>Post Details</div>
                <br/>

            
                <div className="card text-white bg-info mb-3 card" >
                    <div className="card-header"><b>UserID: </b>{post_data && post_data.userId}</div>
                    <div className="card-body">
                    <h5 className="card-title"><b>Title: </b> {post_data && post_data.title}</h5>
                    <p className="card-text"><b>Post: </b>  {post_data && post_data.body}</p>
                 </div>
                 </div>




            </div>

        );
    
}
