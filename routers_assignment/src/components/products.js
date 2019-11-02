import React, { Component } from 'react';
import '../App.css';
import shopContext from '../cotext/shopContext';


export class Products extends Component {


    static contextType = shopContext;

    componentDidMount() {
        console.log('product: ', this.context.products);
    }

    render() {

        return (

            <div>
                <div className='App-header'>Products</div>

                <ul>

                    {this.context.products && this.context.products.map((item, key) => 
                        <li key={item.id} className='linkstle'>{item.name}
                        <button onClick={this.context.addToCart.bind(this,item)}>add </button>
                        </li>
                    )}
                </ul>

            </div>

        );
    }
}