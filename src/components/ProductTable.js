import React, { Component } from 'react'
import ProductCatagoryHeading from './ProductCatagoryHeading'
import ProductItem from './ProductItem'
import Data from '../data/Data.json'


export default class ProductTable extends Component {
    render() {

        // let filteredProduct = Data.map(dataDetails => {
           
        //     if (dataDetails.category === "Sporting Goods") {
        //         return (
        //             <div>                      
        //                 <ProductItem detail={dataDetails} key={dataDetails.id} />
        //             </div>
        //             )
        //     }
            
        //  }) 




        //  BELOW IS: short circuit operator, like ternary but instead renders something if condition is true & nothing if its not
        let sportProducts = Data.map(dataDetails => {
           return ( 
                (dataDetails.category === "Sporting Goods") && 
                <div>
                    <ProductItem detail={dataDetails} key={dataDetails.id} />
                </div>
                )
        })


        let electronicProducts = Data.map(dataDetails => {
            return ( 
                 (dataDetails.category === "Electronics") && 
                 <div>
                     <ProductItem detail={dataDetails} key={dataDetails.id} />
                 </div>
                 )
         })



        return (
            <div>
                <div className="flex-row">
                    <div className="titles">Name</div>
                    <div className="titles">Price</div>
                </div>

                
                <div>
                    <ProductCatagoryHeading title="Sporting Goods" /> 
                        {sportProducts}
                </div>
                
                
                <div>
                    <ProductCatagoryHeading title="Electronics" /> 
                        {electronicProducts}
                </div>




            </div>
        )
    }
}
