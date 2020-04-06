import React, { Component } from 'react'
import Data from '../data/Data.json'


export default class ProductItem extends Component {
    render() {

        // BELOW IS: Destructuring 
        const {id, category, price, name, stocked} = this.props.detail

        return (
            <div className="flex-row">
                <div >{ name }</div>
                <div >{ price }</div>
                 
            </div>
        )
    }
}
