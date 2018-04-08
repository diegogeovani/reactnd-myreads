import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/BookshelfSelector.css'

class BookshelfSelector extends Component {

    static propTypes = {
        shelf: PropTypes.string.isRequired,
        onSelection: PropTypes.func.isRequired
    }

    shelfOptions = [
        { title: 'Currently Reading', value: 'currentlyReading' },
        { title: 'Want to Read', value: 'wantToRead' },
        { title: 'Read', value: 'read' },
        { title: 'None', value: null }
    ]

    constructor(props) {
        super(props)
        this.state = {
            disabled: false
        }
    }

    onSelect = (value) => {
        if (this.shelfOptions.find(function (o) { return o.value === value })) {
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
                    {this.shelfOptions.map(o => <option key={o.value} value={o.value}>{o.title}</option>)}
                </select>
            </div>
        )
    }

}

export default BookshelfSelector