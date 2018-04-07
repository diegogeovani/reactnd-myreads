import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ShelfHeading from './ShelfHeading'
import Book from './Book';
import '../styles/Bookshelf.css'

class Bookshelf extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array,
        emptyMessage: PropTypes.bool.isRequired
    }

    render() {
        const { title, books, emptyMessage } = this.props

        return (
            <div className="bookshelf">
                <ShelfHeading
                    title={title} />
                {books && (
                    books.length >= 1 ? (
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {books.map(b =>
                                    <li key={b.id}>
                                        <Book
                                            shelf={b.shelf}
                                            imageUrl={b.imageLinks.thumbnail}
                                            title={b.title}
                                            authors={b.authors.toString()}
                                        />
                                    </li>
                                )}
                            </ol>
                        </div>)
                        : (
                            emptyMessage && <p>No books here</p>
                        )
                )}
            </div>
        )
    }
}

export default Bookshelf
