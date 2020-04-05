import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <form className="search-bar">
                <label>
                    <input className="input-field" type="text" placeholder="search..."/>
                </label>

                <label>
                    <input type="checkbox"/>
                    Only show products in stock
                </label>
                
                
            </form>
        )
    }
}
