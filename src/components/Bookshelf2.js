import React, { Component } from 'react'
import ShelfHeading from './ShelfHeading'
import Book from './Book';

class Bookshelf2 extends Component {

    render() {
        return (
            <div className="bookshelf">
                <ShelfHeading title="Want to Read" />
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <li>
                            <Book title="1776" authors="David McCullough" imageUrl="http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api" />
                        </li>
                        <li>
                            <Book title="Harry Potter and the Sorcerer's Stone" authors="J.K. Rowling" imageUrl="http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api" />
                        </li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf2
