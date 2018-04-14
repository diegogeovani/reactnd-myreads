import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Bookshelf from '../components/Bookshelf'
import BookAddButton from '../components/BookAddButton'
import { shelves } from '../model'
import '../styles/MainPage.css'

class MainPage extends Component {

  static propTypes = {
    books: PropTypes.array,
    onBookshelfChange: PropTypes.func
  }

  render() {
    const { books, onBookshelfChange } = this.props
    const noneShelf = shelves.find(s => s.value === 'none').value

    return (
      <div className="list-books">
        <Header title="MyReads" />
        <main className="list-books-content">
          {shelves.filter(s => s.value !== noneShelf).map(o => (
            <Bookshelf
              key={o.value}
              title={o.title}
              emptyMessage={books && books.length >= 1}
              books={books && books.filter(b => b.shelf === o.value)}
              onBookMove={onBookshelfChange} />
          ))}
        </main>
        <BookAddButton />
      </div>
    )
  }

}

export default MainPage