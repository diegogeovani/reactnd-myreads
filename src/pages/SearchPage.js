import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchBar from '../components/SearchBar'
import { renderBook } from '../components/Bookshelf'
import * as BooksAPI from '../apis/BooksAPI'
import '../styles/SearchPage.css'

class SearchPage extends Component {

    static propTypes = {
        shelfBooks: PropTypes.array
    }

    state = {
        results: [],
    }

    findBooks = (query) => {
        BooksAPI.search(query.trim()).then((results) => {
            console.log(`Search results: ${results.length}`)
            this.setState({ results })
        })
    }

    clearResults = () => {
        this.setState({ results: [] })
    }

    render() {
        const { results } = this.state;

        return (
            <div className="search-books">
                <SearchBar
                    onQueryChange={this.findBooks}
                    onQueryClear={this.clearResults} />
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