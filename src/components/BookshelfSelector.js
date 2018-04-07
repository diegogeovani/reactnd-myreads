import React from 'react'
import PropTypes from 'prop-types'
import '../styles/BookshelfSelector.css'

const shelfOptions = [
    { title: 'Currently Reading', value: 'currentlyReading' },
    { title: 'Want to Read', value: 'wantToRead' },
    { title: 'Read', value: 'read' },
    { title: 'None', value: null }
]

const BookshelfSelector = ({ shelf }) => (
    <div className="book-shelf-changer">
        <select value={shelf}>
            <option value='placeholder' disabled>Move to...</option>
            {shelfOptions.map(o => <option key={o.value} value={o.value}>{o.title}</option>)}
        </select>
    </div>
)

BookshelfSelector.PropTypes = {
    shelf: PropTypes.string.isRequired
}

export default BookshelfSelector