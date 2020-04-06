import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import Data from '../data/Data.json'



export default class ContainProductTable extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            filterText: '',
            inStockOnly: false
        }
    }

    handleStock() {
        this.setState ({
           
        })
    }

    
    handleInput() {
        this.setState ({
           
        })
    }
    

    render() {
        return (
            <div className="container">
                <SearchBar filterText = {this.state.filterText} inStockOnly = {this.state.inStockOnly} />
                <ProductTable  />
                
            </div>
        )
    }
}
