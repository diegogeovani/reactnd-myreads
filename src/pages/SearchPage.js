import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchBar from '../components/SearchBar'
import { setShelf } from '../components/App'
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

  componentWillReceiveProps(newProps) {
    this.showResults(this.state.results, newProps.shelfBooks)
  }

  findBooks = (query) => {
    BooksAPI.search(query.trim()).then((results) => {
      results.length > 0 ? this.showResults(results, this.props.shelfBooks) : this.clearResults()
    })
  }

  showResults = (results, shelfBooks) => {
    const shelfResults = results.filter(result => shelfBooks.find(book => this.isBookResult(book, result)))
    shelfResults.forEach(result => {
      const shelfResultsBooks = shelfBooks.filter(book => this.isBookResult(book, result));
      shelfResultsBooks.forEach(book => setShelf(result, book.shelf))
    })
    this.setState({ results })
  }

  clearResults = () => {
    this.setState({ results: [] })
  }

  isBookResult(book, result) {
    return book.id === result.id
  }

  render() {
    const { results } = this.state;

    return (
      <div className="search-books">
        <SearchBar
          onQueryChange={this.findBooks}
          onQueryClear={this.clearResults} />
        {results.length > 0 && (
          <main className="search-books-results">
            <ol className="books-grid">
              {results.map(r => renderBook(r, this.props.onBookAdd))}
            </ol>
          </main>
        )}
      </div>
    )
  }

}

export default SearchPage