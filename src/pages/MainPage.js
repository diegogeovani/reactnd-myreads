import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Bookshelf from '../components/Bookshelf'
import BookAddButton from '../components/BookAddButton'
import { shelfOptions } from '../model'
import '../styles/MainPage.css'

class MainPage extends Component {

  static propTypes = {
    books: PropTypes.array,
    onBookshelfChange: PropTypes.func
  }

  render() {
    const { books, onBookshelfChange } = this.props
    const noneOption = shelfOptions.find(o => o.value === 'none').value

    return (
      <div className="list-books">
        <Header title="MyReads" />
        <div className="list-books-content">
          <div>
            {shelfOptions.filter(o => o.value !== noneOption).map(o => (
              <Bookshelf
                key={o.value}
                title={o.title}
                emptyMessage={books && books.length >= 1}
                books={books && books.filter(b => b.shelf === o.value)}
                onBookMove={onBookshelfChange} />
            ))}
          </div>
        </div>
        <BookAddButton />
      </div>
    )
  }

}

export default MainPage