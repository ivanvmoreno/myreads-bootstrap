import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import BookShelf from './BookShelf'
import Search from './Search'
import * as BooksAPI from './BooksAPI'

class App extends Component {

  state = {
    books : [],
    searchQuery: ""
  }


  /**
    getBooks fetches the API and then reformat the received array of books
  */

  getBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({books})
    })
  }


  /**
    moveBook will take in an id, store it as an object and also a shelf
    destination
  */

  moveBook = (id, shelf) => {
    BooksAPI.update(id,shelf)
    this.getBooks()
  }

  storeSearchQuery = (query) => {
    this.setState({searchQuery:query})
  }

  /**
    We call getBooks in componentDidMount to fetch the books once the other components are
    ready in the DOM
  */

  componentDidMount() {
    this.getBooks()
  }


  render() {
    return (

      <div className="app">
        <Route exact path='/' render={() => (
          <BookShelf
            books={this.state.books}
            getBooks={this.getBooks}
            moveBook={this.moveBook}
            storeSearchQuery={this.storeSearchQuery}
          />
        )} />
        <Route path='/search/' render={() => (
          <Search
            moveBook={this.moveBook}
            getBooks={this.getBooks}
            searchQuery={this.state.searchQuery}
          />
          )} />
          </div>
        );
        }
          }

    export default App;
