import React, { Component } from 'react';
import shopContext from '../cotext/shopContext';


export class Cart extends Component {

    static contextType = shopContext;

    componentDidMount() {
        console.log('cart: ', this.context.cart);
    }

    render() {

        return (

            <div>
                <div className='App-header'>Cart</div>

                <ul>
                    {this.context.cart.map((item) =>

                        <li key={item.id}>
                            <span> {item.name} </span>
                            <span> {item.quantity} </span>
                            <button onClick={this.context.removeFromCart.bind(this, item.id)}>Remove</button>

                        </li>
                    )
                    }
                </ul>

            </div>
        );
    }
}