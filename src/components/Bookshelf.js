import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ShelfHeading from './ShelfHeading'
//import * as BooksAPI from '../apis/BooksAPI'
import Book from './Book';
import '../styles/Bookshelf.css'

class Bookshelf extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array,
        emptyMessage: PropTypes.bool.isRequired
    }

    updateBookShelf(book, newShelf) {
        console.log('API Call');
        console.log(`title: ${book.title},  current shelf: ${book.shelf}, new shelf: ${newShelf}`);
        // Api call
        // remove book from state
        // callback to the parent method to insert the new book in the new shelf
    }

    render() {
        const { title, books, emptyMessage } = this.props

        return (
            <div className="bookshelf">
                <ShelfHeading title={title} />
                {books && (
                    books.length >= 1 ? (
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {this.props.books.map(b => this.renderBook(b))}
                            </ol>
                        </div>
                    ) : (
                            emptyMessage && <p>No books here</p>
                        )
                )}
            </div>
        )
    }

    renderBook(book) {
        return (
            <li key={book.id}>
                <Book
                    book={book}
                    onShelfSelection={this.updateBookShelf} />
            </li>
        )
    }
}

export default Bookshelf
