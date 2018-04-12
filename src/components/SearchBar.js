import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../styles/SearchBar.css'

class SearchBar extends Component {

  static propTypes = {
    onQueryChange: PropTypes.func.isRequired,
    onQueryClear: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query })
    const { onQueryChange, onQueryClear } = this.props
    if (query.trim().length > 0) {
      onQueryChange(query)
    } else {
      onQueryClear()
    }
  }

  render() {
    return (
      <div className="search-books-bar">
        <Link to="/" className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)}
            placeholder="Search by title or author" />
        </div>
      </div>
    )
  }

}

export default SearchBar