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
    onBookMove: PropTypes.func
  }

  render() {
    const { title, books, emptyMessage, onBookMove } = this.props

    return (
      <section className="bookshelf">
        <ShelfHeading title={title} />
        {books && (
          books.length >= 1 ? (
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.map(b => this.renderBook(b, onBookMove ? onBookMove : () => { }))}
              </ol>
            </div>
          ) : (
              emptyMessage && <p>No books here</p>
            )
        )}
      </section>
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