import React, { Component } from 'react'

export default class SearchBar extends Component {
    
    constructor(props) {
        super(props)
    
        this.handleStock = this.handleStock.bind(this)
        
    }

    // define the handleStock event
    handleStock(event) {
        this.props.onStockChange(event.target.checked)
    }

    
    

    render() {
        

        const { inStockOnly } = this.props


        return (
            <form className="search-bar">
                <label>
                    <input className="input-field" type="text" placeholder="search..."  />
                </label>

                <label>
                    <input type="checkbox" checked={inStockOnly} onChange={this.handleStock} />
                    Only show products in stock
                </label>
                                
            </form>
        )
    }
}
