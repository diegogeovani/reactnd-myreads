import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchBar from '../components/SearchBar'
import { renderBook } from '../components/Bookshelf'
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
        const { results } = this.state;

        return (
            <div className="search-books">
                <SearchBar
                    onQueryChange={this.findBooks} />
                {results.length > 0 && (
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {results.map(r => renderBook(r, () => { }))}
                        </ol>
                    </div>
                )}
            </div>
        )
    }

}

export default SearchPage