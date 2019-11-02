import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,NavLink} from 'react-router-dom';
import Route from'react-router-dom/Route';

import {Home} from './components/home';
import {Products} from './components/products';
import {About} from './components/about';
import {Contacts} from './components/contacts';
import {Details} from './components/postdetails';
import {Cart} from './components/cart';
import shopContext from './cotext/shopContext';


class App extends Component {

  constructor(props){
    super(props);
  this.state={
    products:[
      {id:1 ,name:'keyboard'},
      {id:2 ,name:'mouse'}
  ],
  cart:[]

  };
  }

  componentDidMount()
  {
    console.log('app',this.state.cart);
  }

  addToCart=(product)=>
  {
    console.log('add to cart',this.state);

    const updatedCart=[...this.state.cart];
    const updatedItemIndex=updatedCart.findIndex(item=>item.id===product.id);

    if(updatedItemIndex<0){
      updatedCart.push({...product,quantity:1});

    }
    else{

      const updatedItem={ ...updatedCart[updatedItemIndex]};
      updatedItem.quantity++;
      updatedCart[updatedItemIndex]=updatedItem;


    }

    this.setState({cart:updatedCart})
    console.log('update',this.state.cart)


  }
  
  removeFromCart=(productID)=>{
    console.log('remove',productID);

    const updatedCart=[...this.state.cart];
    const updatedItemIndex=updatedCart.findIndex(item=>item.id===productID);
    const updatedItem={ ...updatedCart[updatedItemIndex]};
    updatedItem.quantity--;

    if(updatedItem.quantity<=0){
      updatedCart.splice(updatedItemIndex,1);

    }
    else{
      updatedCart[updatedItemIndex]=updatedItem;
    }
    
    this.setState({cart:updatedCart})
    console.log('update',this.state.cart)

  }
  render() {
    
    return (

      <Router>
        <shopContext.Provider value={
          {
            products:this.state.products,
            cart:this.state.cart,
            addToCart:this.addToCart,
            removeFromCart:this.removeFromCart
          }
        }>

       <div className="App">
      
      
        
        
       <NavLink to='/' className='link' exact  activeStyle={{color:'red'}}>Home</NavLink>
       <NavLink to='/about' className='link' exact activeStyle={{color:'red'}}>About</NavLink>
       <NavLink to='/contacts' className='link' exact activeStyle={{color:'red'}}>Contacts</NavLink>
       <NavLink to='/products' className='link' exact activeStyle={{color:'red'}}>Products</NavLink>
       <NavLink to='/cart' className='link' exact activeStyle={{color:'red'}}>Cart</NavLink>

       <Route path='/' exact component={Home}  />
       <Route path='/about' exact strict component={About}/>
       <Route path='/contacts' exact component={Contacts}/>
       <Route path='/postdetails/:id' exact component={Details}/>
       <Route path='/products' exact component={Products}/>
       <Route path='/cart' exact component={Cart}/>
      
       </div>
       </shopContext.Provider>
      

      </Router>
    );
  }
}

export default App;
