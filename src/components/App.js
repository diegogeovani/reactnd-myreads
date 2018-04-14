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

  update = (book, newShelf) => {
    const books = this.state.books;
    BooksAPI.update(book, newShelf).then((result) => {
      const oldBook = books.find(b => b.id === book.id)
      const refreshedBooks = oldBook ? this.updateBookShelf(books, oldBook, newShelf) : this.addBook(books, book, newShelf)
      this.setState({ books: refreshedBooks })
    })
  }

  addBook(books, book, newShelf) {
    books.push(this.setShelf(book, newShelf))
    return books;
  }

  updateBookShelf(books, book, newShelf) {
    const i = books.indexOf(book);
    books[i] = this.setShelf(book, newShelf)
    return books
  }

  setShelf(book, newShelf) {
    book.shelf = newShelf
    return book
  }

  render() {
    return (
      <div className="app">
        <Route
          exact path="/"
          render={() => (
            <MainPage
              books={this.state.books}
              onBookshelfChange={this.update} />
          )} />

        <Route
          path="/search"
          render={({ history }) => (
            <SearchPage
              shelfBooks={this.state.books}
              onBookAdd={this.update} />)}
        />
      </div >
    )
  }
}

export default BooksApp
export const setShelf = BooksApp.prototype.setShelf