import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'
import Bookshelf from './Bookshelf'
import BookAddButton from './BookAddButton'
import * as BooksAPI from '../apis/BooksAPI'
import '../styles/App.css'

class BooksApp extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      books && this.setState({ books })
    })
  }

  render() {
    const { books } = this.state
    const shelfName = {
      reading: 'currentlyReading',
      want: 'wantToRead',
      read: 'read',
    }

    return (
      <div className="app">
        <Route
          exact path="/"
          render={() => (
            <div className="list-books">
              <Header title="MyReads" />
              <div className="list-books-content">
                <div>
                  <Bookshelf
                    title="Currently Reading"
                    books={books.filter(b => b.shelf === shelfName.reading)}
                    emptyMessage={books.length >= 1} />
                  <Bookshelf
                    title="Want to Read"
                    books={books.filter(b => b.shelf === shelfName.want)}
                    emptyMessage={books.length >= 1} />
                  <Bookshelf
                    title="Read"
                    books={books.filter(b => b.shelf === shelfName.read)}
                    emptyMessage={books.length >= 1} />
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
}

export default BooksApp
