import React, { Component } from 'react'

export default class SearchBar extends Component {
    
    constructor(props) {
        super(props)
    
        this.handleStock = this.handleStock.bind(this)
        this.handleFilter = this.handleFilter.bind(this)
        
    }

    // define the handleStock event
    handleStock(event) {
        this.props.onStockChange(event.target.checked)
    }

    handleFilter(event) {
        this.props.onTextInput(event.target.value)
    }
    

    render() {
        

        const { inStockOnly, filterText } = this.props


        return (
            <form className="search-bar">
                <label>
                    <input className="input-field" type="text" placeholder="search product name..." value={filterText} onChange={this.handleFilter} />
                </label>

                <label>
                    <input type="checkbox" checked={inStockOnly} onChange={this.handleStock} />
                    Only show products in stock
                </label>
                                
            </form>
        )
    }
}
