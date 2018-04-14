import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Header.css'

const Header = ({ title }) => (<header className="list-books-title"><h1>{title}</h1></header>)

Header.PropTypes = {
  title: PropTypes.string
}

export default Header