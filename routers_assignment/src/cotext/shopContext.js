import React from 'react';

export default React.createContext({
    products:[
        {id:1 ,name:'keyboard'},
        {id:2 ,name:'mouse'}
    ],
    cart:[],
    addToCart:(product)=>{},
    removeFromCart:(id)=>{}
});