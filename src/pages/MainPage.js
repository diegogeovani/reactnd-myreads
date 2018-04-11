import React, { Component } from 'react'
import Header from '../components/Header'
import Bookshelf from '../components/Bookshelf'
import BookAddButton from '../components/BookAddButton'
import * as BooksAPI from '../apis/BooksAPI'
import { shelfOptions } from '../model'
import '../styles/App.css'

class MainPage extends Component {

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
        )
    }

    updateBooks(books, book, newShelf) {
        book.shelf = newShelf
        books[books.indexOf(book)] = book
        return books
    }

}

export default MainPage