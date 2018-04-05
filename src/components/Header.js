import React from 'react'

function Header(props) {
    const title = props.title
    return (
        <div className="list-books-title">
            <h1>{title}</h1>
        </div>
    )
}

export default Header