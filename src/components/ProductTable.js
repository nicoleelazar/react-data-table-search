import React, { Component } from 'react'
import ProductCatagoryHeading from './ProductCatagoryHeading'
import ProductItem from './ProductItem'
import Data from '../data/Data.json'


export default class ProductTable extends Component {
    render() {

        let filteredProduct = Data.map(dataDetails => {
           
            if (dataDetails.category === "Sporting Goods") {
                return (
                    <div>                      
                        <ProductItem detail={dataDetails} key={dataDetails.id} />
                    </div>
                    )
            }
            
         }) 


        return (
            <div>
                <div className="flex-row">
                    <div>Name</div>
                    <div>Price</div>
                </div>

                
                <div>
                <ProductCatagoryHeading title="Sporting Goods" /> 
                    {filteredProduct}
                </div>
                
                

                {/* <ProductCatagoryHeading title="Electronics" /> */}

                {/* { Data.map(dataDetails => {
                   return <ProductItem detail={dataDetails} key={dataDetails.id} />
                   
                }) } */}



            </div>
        )
    }
}
