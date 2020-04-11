import React, { Component } from 'react'
import ProductCatagoryHeading from './ProductCatagoryHeading'
import ProductItem from './ProductItem'
import Data from '../data/Data.json'


export default class ProductTable extends Component {
    render() {

        const { inStockOnly, filterText } = this.props

        let rows = [];
        let previousCategory;
        // let nameToTest = dataDetails.name
        let caseInsensitive = new RegExp(filterText, 'i')


        Data.forEach((dataDetails) => {

            // The below doesn't work with Turkish Case words, so used .test method instead
            // if( nameToTest.toLowerCase().indexOf(filterText) === -1 ) {
            //     return
            // }

            if (!caseInsensitive.test(dataDetails.name) ) {
                return
            }
                        
            //if checked & product is not in stock
            if(inStockOnly && !dataDetails.stocked) {
                return
            }
            
            if (dataDetails.category !== previousCategory) {
                rows.push(
                    < ProductCatagoryHeading detail={dataDetails} />
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
