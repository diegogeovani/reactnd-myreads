import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/Book.css'

class Book extends Component {

    static propTypes = {
        title: PropTypes.string,
        authors: PropTypes.string,
        imageUrl: PropTypes.string.isRequired
    }

    /*constructor(props) {
        super(props)
        this.state = {

        }
    }*/

    render() {
        const { title, authors, imageUrl } = this.props

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${imageUrl})` }} />
                    <div className="book-shelf-changer">
                        <select>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors}</div>
            </div>
        )
    }

}

export default Book