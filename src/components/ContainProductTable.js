import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'


export default class ContainProductTable extends Component {
    render() {
        return (
            <div className="container">
                <SearchBar />
                <ProductTable />
                
            </div>
        )
    }
}
