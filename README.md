# myreads - An Udacity's React nanodegree project

This is a project built for the Udacity's React nanodegree with the help of [create-react-app](https://github.com/facebookincubator/create-react-app) and the [BooksAPI](https://github.com/udacity/reactnd-project-myreads-starter)

# Documentation

## Functions

Here we'll describe the behavior of the functions used in the project

###  getBooks()

`getBooks()` will fetch the BooksAPI and store the array of books into the `App` component's state.


```
getBooks = () => {
  BooksAPI.getAll().then(books => {
    this.setState({books})
  })
}
```

### moveBook()

`moveBook()` will take in the ID of a book (in object notation) and a destination shelf to call `BooksAPI.update()` with those parameters.


```
moveBook = (id, shelf) => {
  BooksAPI.update(id,shelf)
  this.getBooks()
}
```

### searchBooks()

`searchBooks()` fetches the query via the `BooksAPI.search` and checks if the user input is valid before making the request.

Also, it'll check if the response is valid before storing it into the `Search` component's state.

If the user input is blank, or `''`, the method will clear the `Search` component's state.

```
searchBooks = (query) => {
    if (query !== '') {
      BooksAPI.search(query).then(result => {
        if (Array.isArray(result)) {
          let array = result.map(book => ({title : book.title, authors : book.authors, thumbnail : book.imageLinks.thumbnail, shelf : book.shelf, id : book.id}))
          this.setState({booksArray : array})}
        }
      )
    } else {
      this.setState({
        booksArray : []
      })
    }
}
```

### clearSearch()

`clearSearch()` will clear both `Search` component's state and the search input.

```
clearSearch = () => {
  this.setState({
    booksArray : []
  })
  document.getElementById('search-input').value = ''
}
```
