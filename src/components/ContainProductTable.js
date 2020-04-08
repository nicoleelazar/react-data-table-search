import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'



export default class ContainProductTable extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            filterText: '',
            inStockOnly: false
        }

        this.handleStock = this.handleStock.bind(this)
    }

    handleStock(inStockOnly) {
        this.setState ({
           inStockOnly: inStockOnly
        })
    }

    
    

    render() {
        return (
            <div className="container">
                <SearchBar 
                    // passing down state as props
                     inStockOnly = {this.state.inStockOnly} 

                    // passing down method as props
                    onStockChange={this.handleStock}
                />
                <ProductTable  inStockOnly={this.state.inStockOnly} />
                
            </div>
        )
    }
}
