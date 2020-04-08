import React, { Component } from 'react'
import ProductCatagoryHeading from './ProductCatagoryHeading'
import ProductItem from './ProductItem'
import Data from '../data/Data.json'


export default class ProductTable extends Component {
    render() {

        const { inStockOnly } = this.props

        let rows = [];
        let previousCategory;

        Data.forEach(dataDetails => {

            //if checked & product is not in stock
            if(inStockOnly && !dataDetails.stocked) {
                return
            }
            
           
            if (dataDetails.category !== previousCategory) {
                rows.push(
                    < ProductCatagoryHeading detail={dataDetails}/>
                )
            }

            rows.push (
                <ProductItem detail={dataDetails} key={dataDetails.id} />
            )
            
            previousCategory = dataDetails.category;

            

            // console.log (dataDetails.stocked) 
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
