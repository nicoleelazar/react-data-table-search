import React, { Component } from 'react'
import Data from '../data/Data.json'


export default class ProductItem extends Component {
    render() {

        const {id, category, price, name, stocked} = this.props.detail

        return (
            <div>
                hello there { name }
                {/* { Data.map(dataDetails => {
                   return (
                       <ul key={dataDetails.id}>
                           <li> {dataDetails.name} {dataDetails.price} </li>
                       </ul>
                   )
                   
                }) } */}
            </div>
        )
    }
}
