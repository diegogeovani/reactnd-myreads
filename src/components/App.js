import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import SearchPage from '../pages/SearchPage'
import * as BooksAPI from '../apis/BooksAPI'
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

  updateBooks(books, book, newShelf) {
    book.shelf = newShelf
    books[books.indexOf(book)] = book
    return books
  }

  render() {
    return (
      <div className="app">
        <Route
          exact path="/"
          render={() => (
            <MainPage
              books={this.state.books}
              onUpdate={this.updateBookShelf} />
          )} />

        <Route
          path="/search"
          render={({ history }) => (
            <SearchPage shelfBooks={this.state.books} />)}
        />
      </div >
    )
  }
}

export default BooksApp