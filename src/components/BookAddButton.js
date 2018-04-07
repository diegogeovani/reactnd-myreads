import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/BookAddButton.css'

const BookAddButton = () => (<div className="open-search"><Link to="/search">Add a book</Link></div>)

export default BookAddButton