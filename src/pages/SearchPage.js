import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchBar from '../components/SearchBar'
import * as BooksAPI from '../apis/BooksAPI'

class SearchPage extends Component {

    static propTypes = {
        shelfBooks: PropTypes.array
    }

    state = {
        results: [],
    }

    findBooks = (query) => {
        BooksAPI.search(query).then((results) => {
            console.log(`Search results: ${results.length}`)
            this.setState({ results })
        })
    }

    render() {
        return (
            <div className="search-books">
                <SearchBar
                    onQueryChange={this.findBooks} />
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                </div>
            </div>
        )
    }

}

export default SearchPage