import React, { Component } from 'react'


export default class ProductItem extends Component {
    render() {

        // BELOW IS: Destructuring 
        const {price, name} = this.props.detail

        return (
            <div className="flex-row">
                <div >{ name }</div>
                <div >{ price }</div>
                 
            </div>
        )
    }
}
