# Project

This app is a result of the first React Nanodegree Program project.
It was forked from the [starter template](https://github.com/udacity/reactnd-project-myreads-starter).

## Structure
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── apis # Services like the Udacity Books Api
    ├── components # Reusable React components
    ├── pages # React components that represent a single page
    ├── images # jpeg's and png's
    ├── icons # svg's
    ├── styles # React components' style sheets
    ├── tests # Interface, service and unit tests 
    ├── index.js # React DOM rendering only
    ├── models.js # Business rules
    └── index.css # App's base style sheet
```

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Contributing

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
