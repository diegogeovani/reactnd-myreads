import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchBar from '../components/SearchBar'
import { renderBook } from '../components/Bookshelf'
import * as BooksAPI from '../apis/BooksAPI'
import '../styles/SearchPage.css'

class SearchPage extends Component {

  static propTypes = {
    shelfBooks: PropTypes.array.isRequired,
    onBookAdd: PropTypes.func
  }

  state = {
    results: [],
  }

  findBooks = (query) => {
    const { shelfBooks } = this.props

    BooksAPI.search(query.trim()).then((results) => {
      if (results.length > 0) {
        results.filter(i => shelfBooks.find(function (j) { return j.id === i.id }))
          .forEach(function (k) {
            shelfBooks.filter(l => l.id === k.id).forEach(m => { k.shelf = m.shelf })
          })

        this.setState({ results })
      } else {
        this.clearResults()
      }
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
              {results.map(r => renderBook(r, this.props.onBookAdd))}
            </ol>
          </div>
        )}
      </div>
    )
  }

}

export default SearchPage