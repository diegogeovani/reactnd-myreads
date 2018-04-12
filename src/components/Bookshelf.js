import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ShelfHeading from './ShelfHeading'
import Book from './Book';
import '../styles/Bookshelf.css'

class Bookshelf extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    emptyMessage: PropTypes.bool.isRequired,
    books: PropTypes.array,
    onUpdate: PropTypes.func
  }

  render() {
    const { title, books, emptyMessage, onUpdate } = this.props

    return (
      <div className="bookshelf">
        <ShelfHeading title={title} />
        {books && (
          books.length >= 1 ? (
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.map(b => this.renderBook(b, onUpdate ? onUpdate : () => { }))}
              </ol>
            </div>
          ) : (
              emptyMessage && <p>No books here</p>
            )
        )}
      </div>
    )
  }

  renderBook(book, onShelfSelection) {
    return (
      <li key={book.id}>
        <Book
          book={book}
          onShelfSelection={onShelfSelection} />
      </li>
    )
  }
}

export default Bookshelf
export const renderBook = Bookshelf.prototype.renderBook