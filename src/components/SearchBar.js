import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {

        const { filterText, inStockOnly } = this.props

        return (
            <form className="search-bar">
                <label>
                    <input className="input-field" type="text" placeholder="search..." value={filterText} />
                </label>

                <label>
                    <input type="checkbox" checked={inStockOnly} />
                    Only show products in stock
                </label>
                                
            </form>
        )
    }
}
