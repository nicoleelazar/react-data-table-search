import React, { Component } from 'react'
import ProductCatagoryHeading from './ProductCatagoryHeading'
import ProductItem from './ProductItem'
import Data from '../data/Data.json'


export default class ProductTable extends Component {
    render() {

        const { filterText, inStockOnly } = this.props

        let rows = [];
        let previousCategory;

        Data.map(dataDetails => {
            
           
            if (dataDetails.category !== previousCategory) {
                rows.push(
                    < ProductCatagoryHeading detail={dataDetails}/>
                )
            }

            rows.push (
                <ProductItem detail={dataDetails} key={dataDetails.id} />
            )
            
            previousCategory = dataDetails.category;

         }) 







        return (
            <div>
                <div className="flex-row">
                    <div className="titles">Name</div>
                    <div className="titles">Price</div>
                </div>


                <div> {rows} </div>


            </div>
        )
    }
}
