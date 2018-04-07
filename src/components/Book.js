import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/Book.css'
import BookshelfSelector from './BookshelfSelector';

class Book extends Component {

    static propTypes = {
        shelf: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        title: PropTypes.string,
        authors: PropTypes.string
    }

    constructor(props) {
        super(props)
        this.state = {
            shelf: props.shelf
        }
    }

    render() {
        const { shelf, imageUrl, title, authors } = this.props

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${imageUrl})` }} />
                    <BookshelfSelector shelf={shelf} />
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors}</div>
            </div>
        )
    }

}

export default Book