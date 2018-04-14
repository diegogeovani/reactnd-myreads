import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { shelves } from '../model'
import '../styles/BookshelfSelector.css'

class BookshelfSelector extends Component {

  static propTypes = {
    shelf: PropTypes.string.isRequired,
    onSelection: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      disabled: false
    }
  }

  componentWillReceiveProps(nextProps) {
    this.enable()
  }

  onSelect = (value) => {
    this.disable()
    this.props.onSelection(value)
  }

  disable = () => {
    this.setState({ disabled: true })
  }

  enable = () => {
    this.setState({ disabled: false })
  }

  render() {
    const { shelf } = this.props
    return (
      <div className="book-shelf-changer">
        <select onChange={(event) => this.onSelect(event.target.value)} value={shelf} disabled={this.state.disabled}>
          <option key='placeholder' value='placeholder' disabled>Move to...</option>
          {shelves.map(s => <option key={s.value} value={s.value}>{s.title}</option>)}
        </select>
      </div>
    )
  }

}

export default BookshelfSelector