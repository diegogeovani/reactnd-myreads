import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../styles/Book.css';
import BookshelfSelector from './BookshelfSelector';

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
                    <div className="book-cover"
                        style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})` }} />
                    <BookshelfSelector
                        shelf={book.shelf}
                        onSelection={this.notifyNewShelf} />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors.toString()}</div>
            </div>
        )
    }

}

export default Book