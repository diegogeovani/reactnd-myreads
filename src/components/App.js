import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'
import Bookshelf from './Bookshelf'
import BookAddButton from './BookAddButton'
import * as BooksAPI from '../apis/BooksAPI'
import { shelfOptions } from '../model'
import '../styles/App.css'

class BooksApp extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    if (this.state.books.length === 0) {
      BooksAPI.getAll().then((books) => {
        books && this.setState({ books })
      })
    }
  }

  updateBookShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then((result) => {
      const books = this.updateBooks(this.state.books, book, newShelf)
      this.setState({ books })
    })
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route
          exact path="/"
          render={() => (
            <div className="list-books">
              <Header title="MyReads" />
              <div className="list-books-content">
                <div>
                  {shelfOptions.filter(o => o.value).map(o => (
                    <Bookshelf
                      key={o.value}
                      title={o.title}
                      emptyMessage={books.length >= 1}
                      books={books.filter(b => b.shelf === o.value)}
                      onUpdate={this.updateBookShelf} />
                  ))}
                </div>
              </div>
              <BookAddButton />
            </div>
          )} />

        <Route
          path="/search"
          render={({ history }) => (
            <div className="search-books">
              <div className="search-books-bar">
                <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                <div className="search-books-input-wrapper">
                  {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
                  <input type="text" placeholder="Search by title or author" />

                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid"></ol>
              </div>
            </div>
          )} />
      </div >
    )
  }

  updateBooks(books, book, newShelf) {
    book.shelf = newShelf
    books[books.indexOf(book)] = book
    return books
  }

}

export default BooksApp
