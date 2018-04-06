import React from 'react'
import PropTypes from 'prop-types'

const ShelfHeading = ({ title }) => (<h2 className="bookshelf-title">{title}</h2>)

ShelfHeading.PropTypes = {
    title: PropTypes.string.isRequired
}

export default ShelfHeading