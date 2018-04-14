import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookshelfSelector from './BookshelfSelector'
import { shelfOptions } from '../model'
import imagePlaceholder from '../images/book-placeholder.jpg'
import '../styles/Book.css'

class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    onShelfSelection: PropTypes.func.isRequired,
  }

  notifyNewShelf = (shelf) => {
    this.props.onShelfSelection(this.props.book, shelf)
  }

  render() {
    const book = this.props.book
    return (
      <div className="book">
        <div className="book-top">
          {book.imageLinks ?
            (
              <div className="book-cover" style={{ backgroundImage: `url(${book.imageLinks.thumbnail})` }} />
            ) : (
              <div className="book-cover" style={{ backgroundImage: `url(${imagePlaceholder})` }} />
            )}
          <BookshelfSelector
            shelf={book.shelf ? book.shelf : shelfOptions.find(o => o.value === 'none').value}
            onSelection={this.notifyNewShelf} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors ? book.authors.toString() : 'Unknown'}</div>
      </div>
    )
  }

}

export default Book