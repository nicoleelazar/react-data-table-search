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
        this.handleFilter = this.handleFilter.bind(this)
    }

    handleStock(checkboxInput) {
        this.setState ({
           inStockOnly: checkboxInput
        })
    }

    handleFilter(textInput) {
        this.setState ({
            filterText: textInput
        })
    }

    


    render() {
        return (
            <div className="container">
                <SearchBar 
                    // passing down state as props
                     inStockOnly = {this.state.inStockOnly}  filterText={this.state.filterText}

                    // passing down method as props
                    onStockChange={this.handleStock} onTextInput={this.handleFilter}
                />
                <ProductTable  inStockOnly={this.state.inStockOnly} filterText={this.state.filterText}/>
                
            </div>
        )
    }
}
