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
    const image = book.imageLinks ? book.imageLinks.thumbnail : imagePlaceholder

    return (
      <article className="book">
        <section className="book-top">
          <img className="book-cover" src={image} alt={`${book.title}. Publisher: ${book.publisher}`} />
          <BookshelfSelector
            shelf={book.shelf ? book.shelf : shelfOptions.find(o => o.value === 'none').value}
            onSelection={this.notifyNewShelf} />
        </section>
        <cite className="book-title">{book.title}</cite>
        <footer className="book-authors">{book.authors ? book.authors.toString() : 'Unknown'}</footer>
      </article>
    )
  }

}

export default Book