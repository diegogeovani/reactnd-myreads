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
      const refreshedBooks = this.updateBooks(this.state.books, book, newShelf)
      this.setState({ books: refreshedBooks })
    })
  }

  updateBooks(books, book, newShelf) {
    book.shelf = newShelf
    const i = books.indexOf(book)
    i >= 0 ? books[i] = book : books.push(book)
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
              onBookshelfChange={this.updateBookShelf} />
          )} />

        <Route
          path="/search"
          render={({ history }) => (
            <SearchPage
              shelfBooks={this.state.books}
              onBookAdd={this.updateBookShelf} />)}
        />
      </div >
    )
  }
}

export default BooksApp