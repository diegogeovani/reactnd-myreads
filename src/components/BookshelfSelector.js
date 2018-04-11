import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { shelfOptions } from '../model'
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

    onSelect = (value) => {
        if (shelfOptions.find(function (o) { return o.value === value }).value !== '') {
            this.disable()
            this.props.onSelection(value)
        }
    }

    disable = () => {
        this.setState({ disabled: true })
    }

    render() {
        const { shelf } = this.props
        return (
            <div className="book-shelf-changer">
                <select onChange={(event) => this.onSelect(event.target.value)} value={shelf} disabled={this.state.disabled}>
                    <option key='placeholder' value='placeholder' disabled>Move to...</option>
                    {shelfOptions.map(o => <option key={o.value} value={o.value}>{o.title}</option>)}
                </select>
            </div>
        )
    }

}

export default BookshelfSelector