import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import SearchPage from '../pages/SearchPage'

class BooksApp extends Component {

  render() {
    return (
      <div className="app">
        <Route
          exact path="/"
          render={() => (<MainPage />)} />

        <Route
          path="/search"
          render={({ history }) => (<SearchPage />)} />
      </div >
    )
  }
}

export default BooksApp