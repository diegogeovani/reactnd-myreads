import React from 'react'
import PropTypes from 'prop-types'
import '../styles/ShelfHeading.css'

const ShelfHeading = ({ title }) => (<h2 className="bookshelf-title">{title}</h2>)

ShelfHeading.PropTypes = {
  title: PropTypes.string.isRequired
}

export default ShelfHeading