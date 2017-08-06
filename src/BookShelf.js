import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Book from './Book'

class BookShelf extends Component {
  state={
    query : 'noquery',
    queryCat: '',
    redirect : false
  }

  buttonText = () => {
    switch (this.state.queryCat) {
      case "currentlyReading":
      return "Currently reading"
      break;
      case "wantToRead":
      return "Want to read"
      break;
      case "read":
      return "Read";
      break;
      default:
      return "All shelfs"
    }
  }

  handleKeyPress = () => {
    this.setState({redirect: true});
  }

  render() {

    if (this.state.redirect) {
      return <Redirect push to="/search" />;
    }

    const { books, moveBook, storeSearchQuery } = this.props

    return (

      <div className="container">

        <div className="header">
          <div className="col-xs-12 col-sm-12 col-md-4" id="logo">
            <h2>MyReads</h2>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-2" id="search-bar">
            <div className="input-group">
              <div className="input-group-btn">
                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">{this.buttonText()} <span className="caret"></span></button>
                <ul className="dropdown-menu">
                  <li><a href="#" onClick={() => {this.setState({queryCat:'currentlyReading'})}}>Currently reading</a></li>
                  <li><a href="#" onClick={() => {this.setState({queryCat:'wantToRead'})}}>Want to read</a></li>
                  <li><a href="#" onClick={() => {this.setState({queryCat:'read'})}}>Read</a></li>
                </ul>
              </div>
              <input onChange={(event) => {storeSearchQuery(event.target.value)}} onKeyDown={(event) => {event.keyCode === 13 && this.handleKeyPress()}} type="text" className="form-control" aria-label="..."></input>
              <div className="input-group-btn">
                <Link to={"/search"} className="btn btn-default" type="button"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="list-books-content">
          <div className="shelf">
            <div className="col-xs-12 col-sm-12" id="shelf-title">
              <hr />
              <h2>Currently Reading</h2>
            </div>
            <div className="shelf-books">
              <ol className="books-grid">
              {books.map((book, index) => {
                if (book.shelf === 'currentlyReading'){
                  return (
                    <li key={index}>
                      <Book
                        title={book.title}
                        authors={book.authors}
                        thumbnail={book.imageLinks.thumbnail}
                        shelf={book.shelf}
                        id={book.id}
                        moveBook={moveBook}
                      />
                    </li>
                  )
                }
              })}
              </ol>
            </div>
          </div>

          <div className="shelf">
            <div className="col-xs-12 col-sm-12" id="shelf-title">
              <hr />
              <h2>Want to Read</h2>
            </div>
            <div className="shelf-books">
              <ol className="books-grid">
              {books.map((book, index) => {
                if (book.shelf === 'wantToRead'){
                  return (
                    <li key={index}>
                      <Book
                        title={book.title}
                        authors={book.authors}
                        thumbnail={book.imageLinks.thumbnail}
                        shelf={book.shelf}
                        id={book.id}
                        moveBook={moveBook}
                      />
                    </li>
                  )
                }
              })}
              </ol>
            </div>
          </div>


          <div className="shelf">
            <div className="col-xs-12 col-sm-12" id="shelf-title">
              <hr />
              <h2>Read</h2>
            </div>
            <div className="shelf-books">
              <ol className="books-grid">
              {books.map((book, index) => {
                if (book.shelf === 'read'){
                  return (
                    <li key={index}>
                      <Book
                        title={book.title}
                        authors={book.authors}
                        thumbnail={book.imageLinks.thumbnail}
                        shelf={book.shelf}
                        id={book.id}
                        moveBook={moveBook}
                      />
                    </li>
                  )
                }
              })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BookShelf
